import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const [currencies, setCurrencies] = React.useState([]);

  React.useEffect(() => {
    let cancelled = false;

    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then((res) => res.json())
      .then((data) => {
        const result = Object.values(data.bpi)
          .filter((x) => x.code !== 'GBP')
          .sort((a, b) => a.rate_float - b.rate_float);
        console.log(result);
        if (!cancelled) {
          setCurrencies(result);
        }
      });

    return function cleanup() {
      cancelled = true;
    };
  }, []);

  return (
    <div className='App'>
      <ol>
        {currencies.map((x) => {
          return (
            <li key={x.description}>
              {x.description} {x.rate_float}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default App;
