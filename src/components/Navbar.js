import { useState } from "react";
import Select from "react-select";
// import styled from "styled-components";
function NavBar({ handleGraphSubmit, clearGraph }) {
  const [stateSelected, setStateSelected] = useState([]);
  const [crimeSelected, setCrimeSelected] = useState([]);

  const stateNameArray = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];
  const statesAvailable = stateNameArray.map((stateName, i) => {
    return { value: i + 1, label: stateName };
  });
  console.log(statesAvailable);
  const crimesAvailable = [
    { value: "1", label: "Drug Possesion - (Marijuana)" },
    { value: "2", label: "Drug Possession - (Opium)" },
    { value: "3", label: "Drug Possession - (Synthetic)" },
    { value: "4", label: "Drug Possession - (Other)" },
    { value: "5", label: "Drug Sales - (Marijuana)" },
    { value: "6", label: "Drug Sales - (Opium)" },
    { value: "7", label: "Drug Sales - (Synthetic)" },
    { value: "8", label: "Drug Sales - (Other)" },
  ];
  function handleStateSelections(e) {
    setStateSelected(e.map((val) => val.value));
  }
  function handleCrimeSelections(e) {
    setCrimeSelected(e.map((val) => val.value));
  }
  function handleSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:3000/crimes/data/${stateSelected}/${crimeSelected}`)
      .then((res) => res.json())
      .then((res) => handleGraphSubmit(res));

    setStateSelected([]);
    setCrimeSelected([]);
  }
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px dotted pink",
      color: state.isSelected ? "red" : "blue",
      padding: 10,
      "font-size": "12px",
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      width: "auto",
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
  };
  return (
    <div id="form">
      <form onSubmit={handleSubmit}>
        <Select
          className="select"
          styles={customStyles}
          isMulti
          options={statesAvailable}
          onChange={handleStateSelections}
        />
        <Select
          className="select"
          styles={customStyles}
          isMulti
          options={crimesAvailable}
          onChange={handleCrimeSelections}
        />
        <input type="submit" value="Get The Graph" />
      </form>
      <button onClick={clearGraph}>Clear Graph</button>
    </div>
  );
}
export default NavBar;
