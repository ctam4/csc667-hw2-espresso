import React from "react";
import './jason1819.css';

const teamName = ({city}) => {
  return (
    <div className='page'>
       <h2>To find a nba team name, please enter a city</h2>
      <input value={city} id="input-field" placeholder=""></input>
      <button>search</button>
    </div>
  );
};

export default teamName;