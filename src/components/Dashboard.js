import React from "react";
import "./dashboard.css";
import Navbar from "./Navbar";
import { IoMdHand } from "react-icons/io";

import { faker } from "@faker-js/faker";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import SideRight from "./SideRight";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  plugins: {
    title: {
      display: true,
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
      title: {
        display: true,
        text: "Month",
      },
    },
    y: {
      stacked: true,
      title: {
        display: true,
        text: "Security rating",
      },
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "November",
  "December",
];
export const data = {
  labels,
  datasets: [
    {
      label: "last year",
      data: labels.map(() => faker.datatype.number({ min: 10, max: 30 })),
      backgroundColor: "rgb(218, 47, 32)",
      barThickness: 16,
      barPercentage: 0.5,
    },
    {
      label: "Last Month",
      data: labels.map(() => faker.datatype.number({ min: 20, max: 50 })),
      backgroundColor: "rgb(223, 78, 65)",
      barThickness: 16,
      barPercentage: 0.5,
    },
    {
      label: "Last Week",
      data: labels.map(() => faker.datatype.number({ min: 40, max: 90 })),
      backgroundColor: "rgb(250, 233, 233)",
      barThickness: 16,
      barPercentage: 0.5,
    },
  ],
};

function Dashboard() {
  return (
    <div className="">
      {/* <Navbar /> */}
      <div className="board">
        <div className="board_left">
          <div className="board_left_upper">
            <h1>
              {" "}
              Welcome back, Ayo <IoMdHand className="hand" />
            </h1>
            <p>
              Track your packages with ease, anytime,
              <br /> anywhere!
            </p>
          </div>
          <div className="board_left_middle">
            <div className="board_left_middle_card">
              <div className="middle_card_header">
                <h3>Total Amount Spent</h3>
                <h4>....</h4>
              </div>
              <div>
                <p>₦150,000</p>
              </div>
              <div>
                <p>11.94%</p>
                <img src="" alt="" />
              </div>
            </div>
            <div className="board_left_middle_card">
              <div className="middle_card_header">
                <h3>Total Amount Spent</h3>
                <h4>....</h4>
              </div>
              <div>
                <p>₦150,000</p>
              </div>
              <div>
                <p>11.94%</p>
                <img src="" alt="" />
              </div>
            </div>
            <div className="board_left_middle_card">
              <div className="middle_card_header">
                <h3>Total Amount Spent</h3>
                <h4>....</h4>
              </div>
              <div>
                <p>₦150,000</p>
              </div>
              <div>
                <p>11.94%</p>
                <img src="" alt="" />
              </div>
            </div>
          </div>

          <div className="board_left_buttom">
            <div className="left_buttom">
              <div>
                {" "}
                <h3>Your Rating</h3>
                <p>Track how your ratings drive our delivery thrive!</p>
              </div>
              <h2>...</h2>
            </div>

            <Bar data={data} options={options} />
          </div>
        </div>

        <div className="board_right">
          <SideRight />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
