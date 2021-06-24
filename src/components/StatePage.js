import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import LineChart from "./LineChart";
import BarGraph from "./BarGraph";
import PieChart from "./Piechart";

import Select from "react-select";
import PieChartO from "./PieChartO";
function StatePage() {
  const [currentState, setCurrentState] = useState();
  const { abbrv } = useParams();
  const [loaded, setLoaded] = useState(false);
  const [crimeSelected, setCrimeSelected] = useState([]);
  const [crimeData, setCrimeData] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:3000/states/${abbrv}`)
      .then((res) => res.json())
      .then((res) => {
        setCurrentState(res);
        setLoaded(true);
      });
  }, [abbrv]);
  if (!loaded) {
    return <div>Loading...</div>;
  }
  const crimesAvailable = [
    {
      value: "drug-possession-marijuana",
      label: "Drug Possesion - (Marijuana)",
    },
    { value: "drug-possession-opium", label: "Drug Possession - (Opium)" },
    {
      value: "drug-possession-synthetic",
      label: "Drug Possession - (Synthetic)",
    },
    { value: "drug-possession-other", label: "Drug Possession - (Other)" },
    { value: "drug-sales-marijuana", label: "Drug Sales - (Marijuana)" },
    { value: "drug-sales-opium", label: "Drug Sales - (Opium)" },
    { value: "drug-sales-synthetic", label: "Drug Sales - (Synthetic)" },
    { value: "drug-sales-other", label: "Drug Sales - (Other)" },
  ];
  function handleCrimeSelection(e) {
    setCrimeSelected(e.map((val) => val.value));
  }
  function handleSubmit(e) {
    e.preventDefault();

    fetch(
      `http://localhost:3000/offender_records/${currentState.id}/${crimeSelected}`
    )
      .then((res) => res.json())
      .then((res) => setCrimeData(res));
  }
  console.log(crimeData);
  return (
    <>
      <h1>{currentState.name}</h1>
      <h2>Abbreviation: {currentState.abbreviation}</h2>
      <h3>Population: {currentState.population}</h3>
      <h3>Data from 2019</h3>
      <form onSubmit={handleSubmit}>
        <Select
          className="select"
          isMulti
          options={crimesAvailable}
          onChange={handleCrimeSelection}
        />
        <input type="submit" value="Get The Crime Data" />
      </form>
      {/* <LineChart cuurentState = {charData}/>
      <BarGraph /> */}
      <div className="chartContainer">
        <div className="Piechart">
          <PieChart chartData={currentState} />
        </div>
        <div className="Doughnut">
          {crimeData ? <PieChartO chartData={crimeData} /> : null}
        </div>
      </div>
    </>
  );
}

export default StatePage;
