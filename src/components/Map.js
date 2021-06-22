import React, { Component } from "react";
import USAMap from "react-usa-map";
import StatePage from "./StatePage";
import { useHistory } from "react-router-dom";
var randomColor = require("randomcolor");
function Map() {
  const history = useHistory();
  /* mandatory */
  const mapHandler = (event) => {
    console.log(event.target.dataset.name);
    history.push(`/StatePage/${event.target.dataset.name}`);
  };

  return (
    <div className="App">
      <USAMap
        //   customize={this.statesCustomConfig()}
        width="650"
        height="420"
        onClick={mapHandler}
      />
    </div>
  );
}

export default Map;
