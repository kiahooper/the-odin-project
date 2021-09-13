import React from "react";
import '../styles/Scoreboard.css';
import toucan from "../styles/media/toucan.png";

const Scoreboard = (props) => {
    const {score, bestScore} = props;

  return (
      <div id="scoreboard">
          <img src={toucan} alt="toucan"/>
          <h2>Score: {score}</h2>
          <h2>Best: {bestScore}</h2>
      </div>
  )
}

export default Scoreboard;
