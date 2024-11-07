import React from "react";

import "./Mapbox.css";

const categories = [
  { name: "台灣百岳", level: "HM" },
  { name: "台灣小百岳", level: "SHM" },
];
const DataControl = (props) => {
  function handleChange(event) {
    props.onChange(event.target.value);
    props.onChange2(null);
  }
  return (
    <div className="control-panel">
      <h2>{props.country}</h2>
      <button className="control-but" onClick={props.upperBut}>
        回到縣市界線
      </button>
      <hr />
      <h3>圖層選擇</h3>

      {categories.map((event) => (
        <div key={event.name} className="input">
          <label>
            <input
              type="radio"
              name="LEVEL"
              value={event.level}
              onChange={handleChange}
              checked={props.level === event.level}
            />
            {event.name}
          </label>
        </div>
      ))}
    </div>
  );
};

export default DataControl;
