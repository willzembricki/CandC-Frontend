import React from "react";
import { Doughnut } from "react-chartjs-2";
const PieChartO = ({ chartData }) => {
  // piechart doesnt need percentages. we can feed it whatecer is needed as long as labels match.
  console.log(chartData);
  const data = {
    labels: [
      "Asian",
      "Native Hawaiian",
      "Black",
      "American Indian",
      "Unknown/Not Specified",
      "White",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [
          chartData[0].asianPopO,
          chartData[0].native_hawaiianO,
          chartData[0].blackO,
          chartData[0].american_indianO,
          chartData[0].unknownO,
          chartData[0].whiteO,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 3,
      },
    ],
  };
  console.log(data);
  const nameOfCrime = chartData[0].crimeName.split("-").join(" ");
  return (
    <>
      <div className="header">
        <h1 className="title">Arrest Records Breakdown</h1>
        <h2>{nameOfCrime}</h2>
      </div>
      <div className="chart">
        <Doughnut data={data} height="200px" />
      </div>
    </>
  );
};

export default PieChartO;
