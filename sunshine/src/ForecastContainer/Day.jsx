import React from "react";

const Day = props => {
  return (
    <div className="dayTile">
      <h4>{props.dayName}</h4>
      <div className="conditionIcon">
        {" "}
        <img
          src={"./icons/" + props.obj.weather[0].main + ".png"}
          alt="weather condition"
        />{" "}
      </div>
      <h3>{Math.round((props.obj.main.temp - 273.15) * 10) / 10}°C</h3>
    </div>
  );
};
export default Day;
