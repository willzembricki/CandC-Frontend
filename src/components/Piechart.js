import React from "react";
import { Pie } from "react-chartjs-2";
const PieChart = ({ chartData }) => {
  // piechart doesnt need percentages. we can feed it whatecer is needed as long as labels match.
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
          chartData.asianPop,
          chartData.native_hawaiian,
          chartData.black,
          chartData.american_indian,
          chartData.unkown,
          chartData.white,
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
  return (
    <>
      <div className="header">
        <h1 className="title">State Population Breakdown</h1>
        <div className="links"></div>
      </div>
      <div className="chart">
        <Pie data={data} height="200px" />
      </div>
    </>
  );
};

export default PieChart;
