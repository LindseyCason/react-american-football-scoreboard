//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  
  const [scoreLion, setScoreLion] = useState(0);
  const [scoreTiger, setScoreTiger] = useState(0);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Falcons</h2>

            {/* {scoreLion}
            {scoreTiger} */}

            <div className="home__score">{scoreLion}</div>
          </div>
          <div className="timer">01:43</div>
          <div className="away">
            <h2 className="away__name">Saints</h2>
            <div className="away__score">{scoreTiger}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => setScoreLion(scoreLion + 7)}>Dirty Bird Touchdown</button>
          <button className="homeButtons__fieldGoal"onClick={() => setScoreLion(scoreLion + 3)}>Dirty Bird Field Goal</button>
          <button className="homeButtons__touchdown" onClick={() => setScoreLion(scoreLion + 1)}>Dirty Bird PAT</button>

        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown"onClick={() => setScoreTiger(scoreTiger + 7)}>Saints Touchdown</button>
          <button className="awayButtons__fieldGoal"onClick={() => setScoreTiger(scoreTiger + 3)}>Saints Field Goal</button>
          <button className="awayButtons__touchdown"onClick={() => setScoreTiger(scoreTiger + 1)}>Saints PAT</button>
        </div>
      </section>
    </div>
  );
}

export default App;
