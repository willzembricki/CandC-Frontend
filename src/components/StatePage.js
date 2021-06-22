import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import LineChart from "./LineChart";
import BarGraph from "./BarGraph";
function StatePage() {
  const [currentState, setCurrentState] = useState();
  const { abbrv } = useParams();
  const [loaded, setLoaded] = useState(false);
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
  return (
    <>
      <div>{currentState.name}</div>
      <div>{currentState.abbreviation}</div>
      <div>{currentState.population}</div>
      <LineChart />
      <BarGraph />
    </>
  );
}

export default StatePage;
