 import React from "react";
 import './jason1819.css';

const getTeamName = (e) => {
  e.preventDefault();
  const city = document.getElementById('input-field');
  const result = document.getElementById('output-field');
  result.innerHTML = 'Loading....';
  const url= "/api/jason1819/team_name?city=" + city.value;
  fetch(url)
    .then(res => res.json())
    .then(data => {
         console.log(data);
      if(data.status === 'OK'){
         result.innerHTML = data.response;
      }
      else{
         result.innerHTML = 'Error: ' + data.response;
      }
    })
    .catch((err) => result.innerHTML = err);
};

const jasonPage = () =>{
  return(
    <section>
      <div className="header">
           <h1>Welcome to my page</h1>
      </div>
      <div className="center">
          <img width="30%" src="https://imgur.com/aLKnUn5.jpg" alt="nba team logos"/>
      </div>
      <form onSubmit={getTeamName}>
      <div className="center">
        <h4>*To find a NBA team name, please enter a city</h4>
      </div>
        <div className="center">
          <input
            id="input-field"
            type="text"
            required
            placeholder=" "
          />
        </div>
           <div className="button">
             <button>submit</button>
           </div>
       </form>
      <div id="output-field" className="output">
    </div>
    </section>
  );
}

export default jasonPage;