import { Line } from "react-chartjs-2";
import { useState } from "react";
const LineChart = ({ charData, labelArr }) => {
  //   const dataStructure = charData.map((yearIns) => {
  //     const year = yearIns.year;
  //     const value = yearIns.total;
  //    return year, value;
  //   });
  var randomColor = require("randomcolor");

  const dataStructure = charData;
  // console.log(dataStructure);
  console.log(labelArr);
  const datasetsArr = dataStructure.map((dataset, i) => {
    return {
      data: dataset,
      label: JSON.stringify(labelArr[i]),
      fill: false,
      backgroundColor: randomColor(),
      borderColor: randomColor(),
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
    };
  });
  console.log(datasetsArr);
  const chartDataConfig = {
    labels: Object.keys(dataStructure),

    datasets: datasetsArr,
  };
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            beginAt: 1995,
          },
        },
      ],
    },
  };
  return (
    <div>
      <Line data={chartDataConfig} option={options} />
    </div>
  );
};
export default LineChart;
