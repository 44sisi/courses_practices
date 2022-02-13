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
  const [updatedTime, setUpdatedTime] = useState('---');
  const [requestedTime, setRequestedTime] = useState('---');

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    let cancelled = false;

    fetchData(signal, z);
    const interval = setInterval(() => {
      fetchData(signal, cancelled);
    }, 5000);

    return function cleanup() {
      clearInterval(interval);
      controller.abort();
      cancelled = true;
    };
  }, []);

  function fetchData(signal, cancelled) {
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json', { signal })
      .then((res) => res.json())
      .then((data) => {
        const result = Object.values(data.bpi);
        const updatedTime = data.time.updated;

        if (!cancelled) {
          setCodesToShow(result.map((r) => r.code));
          setCurrencies(result);
          setUpdatedTime(updatedTime);
          setRequestedTime(new Date().toISOString());
        }
      });
  }

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

  function getCurrenciesToDisplay() {
    return currencies
      .filter((c) => c.code !== codeToHide)
      .filter((c) => codesToShow.includes(c.code))
      .sort((a, b) =>
        sortRateAsc ? a.rate_float - b.rate_float : b.rate_float - a.rate_float
      )
      .slice(0, numberToShow);
  }

  return (
    <div className='App'>
      <div>
        {hasComponent && <ToRemoveWithCleanup />}
        <button onClick={() => setHasComponent(!hasComponent)}>toggle</button>
      </div>

      <div style={tableStyle}>
        <SelectComponent
          description='To hide'
          labelFor='hide-code'
          selectId='hide-code'
          handleChange={handleHideCodeChange}
          options={Array.from(new Set(currencies.map((c) => c.code)))}
        />

        <label htmlFor='show-codes'>To show: </label>
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

        <label htmlFor='sort-rate'>Sort rate by: </label>
        <button
          id='sort-rate'
          onClick={() => setSortRateAsc(!sortRateAsc)}
          style={inputStyle}
        >
          {sortRateAsc ? '↑' : '↓'}
        </button>

        <label htmlFor='choose-number-to-show'>Number to show: </label>
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

        <CurrencyTable currencies={getCurrenciesToDisplay()} />
      </div>

      <div>
        <div>Updated time: {updatedTime}</div>
        <div>Requested time: {requestedTime}</div>
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

function SelectComponent(props) {
  return (
    <>
      <label htmlFor={props.labelFor}>{props.description}: </label>
      <select
        id={props.selectId}
        onChange={props.handleChange}
        style={inputStyle}
      >
        <option></option>
        {props.options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </>
  );
}

function CurrencyTable(props) {
  return (
    <table style={tableStyle}>
      <thead>
        <tr>
          <th>Code</th>
          <th>Rate</th>
          <th>Desc</th>
        </tr>
      </thead>
      <tbody>
        {props.currencies.map((c) => (
          <tr key={c.code}>
            <td>{c.code}</td>
            <td>{c.rate_float}</td>
            <td>{c.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;
