import React from "react";
import "./bdiaz666.css";
const getWeather = e => {
  e.preventDefault();
  const city = document.getElementById("input-field");
  const result = document.getElementById("output-field");
  const weatherURL = "/api/bdiaz666/weather?city=" + city.value;
  result.innerHTML = "Loading...";
  const degree = "ºF";

  fetch(weatherURL)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.status === "OK")
        result.innerHTML =
          data.params.city + " " + data.response + " " + degree;
      else result.innerHTML = "Error: " + JSON.stringify(data.response);
    })
    .catch(err => (result.innerHTML = err));
};
//resets the input-field once is clicked
function reset() {
  document.getElementById("input-field").value = "";
}

const weather = () => {
  return (
    <div id="background">
      <form onSubmit={getWeather}>
        <h2 className="tittle">Bernardo's Page</h2>
        <div className="city">
          <span>City</span>
          <input
            id="input-field"
            onClick={reset}
            type="text"
            required
            placeholder="city"
          />
        </div>
        <div className="box">
          <img
            src="https://media.giphy.com/media/ulAjqv4pOfPOg/giphy.gif"
            alt="logo"
            className="image_logo"
          />
        </div>

        <div className="city">
          <button className="button-text" type="submit">
            Submit
          </button>
        </div>
      </form>
      <div id="output-field"></div>
    </div>
  );
};

export default weather;
