import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function ToRemoveWithCleanup() {
  useEffect(() => {
    const i = setInterval(() => console.log('lalala'), 1000);

    return function cleanup() {
      clearInterval(i);
    };
  }, []);
  return <div>Remove me!</div>;
}

const inputStyle = {
  width: '100px',
};

const tableStyle = {
  margin: 'auto',
  marginTop: '30px',
  marginBottom: '30px',
};

function App() {
  const [hasComponent, setHasComponent] = useState(true);

  const [currencies, setCurrencies] = useState([]);
  const [codeToHide, setCodeToHide] = useState();
  const [codesToShow, setCodesToShow] = useState([]);
  const [sortRateAsc, setSortRateAsc] = useState(true);
  const [numberToShow, setNumberToShow] = useState(5);

  React.useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    let cancelled = false;

    fetch('https://api.coindesk.com/v1/bpi/currentprice.json', { signal })
      .then((res) => res.json())
      .then((data) => {
        const result = Object.values(data.bpi);

        if (!cancelled) {
          setCodesToShow(result.map((r) => r.code));
          setCurrencies(result);
        }
      });

    return function cleanup() {
      controller.abort();
      cancelled = true;
    };
  }, []);

  function handleHideCodeChange(e) {
    console.log(e.target.value);
    setCodeToHide(e.target.value);
  }

  function handleShowCodesChange(e) {
    const selected = Array.from(e.target.options)
      .filter((o) => o.selected)
      .map((o) => o.value);
    console.log(selected);
    setCodesToShow(selected);
  }

  function handleShowNumberChange(e) {
    console.log(e.target.value);
    setNumberToShow(e.target.value);
  }

  return (
    <div className='App'>
      <div>
        {hasComponent && <ToRemoveWithCleanup />}
        <button onClick={() => setHasComponent(!hasComponent)}>toggle</button>
      </div>

      <div style={tableStyle}>
        <label for='hide-code'>To hide: </label>
        <select
          id='hide-code'
          onChange={handleHideCodeChange}
          style={inputStyle}
        >
          <option></option>
          {Array.from(new Set(currencies.map((c) => c.code))).map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>

        <label for='show-codes'>To show: </label>
        <select
          id='show-codes'
          multiple
          size='2'
          onChange={handleShowCodesChange}
          style={inputStyle}
        >
          {Array.from(new Set(currencies.map((c) => c.code))).map((c) => (
            <option selected key={c}>
              {c}
            </option>
          ))}
        </select>

        <label for='sort-rate'>Sort rate by: </label>
        <button
          id='sort-rate'
          onClick={() => setSortRateAsc(!sortRateAsc)}
          style={inputStyle}
        >
          {sortRateAsc ? '↑' : '↓'}
        </button>

        <label for='choose-number-to-show'>Number to show: </label>
        <input
          id='choose-number-to-show'
          type='range'
          value={numberToShow}
          min='1'
          max='10'
          onChange={handleShowNumberChange}
          style={inputStyle}
        ></input>
        <output>{numberToShow}</output>

        <table style={tableStyle}>
          <thead>
            <tr>
              <th>Code</th>
              <th>Rate</th>
              <th>Desc</th>
            </tr>
          </thead>
          <tbody>
            {currencies
              .filter((c) => c.code !== codeToHide)
              .filter((c) => codesToShow.includes(c.code))
              .sort((a, b) =>
                sortRateAsc
                  ? a.rate_float - b.rate_float
                  : b.rate_float - a.rate_float
              )
              .slice(0, numberToShow)
              .map((c) => (
                <tr key={c.code}>
                  <td>{c.code}</td>
                  <td>{c.rate_float}</td>
                  <td>{c.description}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* <ol>
        {currencies.map((x) => {
          return (
            <li key={x.description}>
              {x.description} {x.rate_float}
            </li>
          );
        })}
      </ol> */}
    </div>
  );
}

export default App;
