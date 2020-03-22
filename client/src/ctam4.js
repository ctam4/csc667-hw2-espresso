import React from 'react';

const getCryptoPrice = (e) => {
  e.preventDefault();
  const symbol = document.getElementById('input-field');
  const result = document.getElementById('output-field');
  result.innerHTML = 'Loading...';
  fetch('/api/ctam4/crypto-price?symbol=' + symbol.value)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.status === 'OK') {
        result.innerHTML = data.response;
      }
      else {
        result.innerHTML = 'Error: ' + data.response;
      }
    })
    .catch((err) => result.innerHTML = err);
};

const ctam4 = () => {
  return (
    <section>
      <form onSubmit={getCryptoPrice}>
        <h2>ctam4</h2>
        <div>
          <label>Symbol</label>
          <input
            id="input-field"
            type="text"
            required
            placeholder="Symbol"
          />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
      <div id="output-field"></div>
    </section>
  );
}

export default ctam4;
