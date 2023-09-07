import React from "react";
import "./progressChart.css";

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let convertString = s.toLowerCase().replace(/\W+/g, "");

  let reserveString = convertString.split("").reverse().join("");
  return convertString === reserveString;
};

function ProgressChart(props) {
  return (
    <div>
      <div
        style={{
          backgroundColor: `${props.bcolor}`,
        }}
        className="progress"
      >
        <div> {props.icon}</div>

        <div className="progress_right">
          <div className="progress_details">
            <p>{props.title}</p>
            <p>{props.progress}%</p>
          </div>
          <div
            style={{
              width: "100%",
              backgroundColor: "lightgray",
              height: "10px",
              borderRadius: "10px",
            }}
          >
            <div
              style={{
                width: `${props.progress}%`,
                backgroundColor: `${props.color}`,
                height: "10px",
                borderRadius: "10px",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressChart;
