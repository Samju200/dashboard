import React, { useState } from "react";
import { AiOutlineLaptop, AiOutlineSearch } from "react-icons/ai";
import { GrNotification } from "react-icons/gr";
import { GoVerified } from "react-icons/go";
import Navbar from "./Navbar";
import "./order.css";
import SideRight from "./SideRight";
const Delivered = () => {
  return (
    <div className="order_details_detail">
      <div className="order_detail_header">
        {" "}
        <GoVerified />{" "}
        <p>
          Delivered : <span>05 Sep 2022 - 15 Sep 2022</span>{" "}
        </p>
      </div>
      <hr />
      <div className="order_detail">
        <p>
          {" "}
          Order ID: <span>#228-345-564-767</span>
        </p>
        <p>
          {" "}
          Item: <span>Clothes</span>
        </p>
        <p>
          {" "}
          Amount: <span>1,500</span>
        </p>
      </div>
      <div className="order_detail">
        <p>
          {" "}
          Shipping: <span>Paid</span>
        </p>
        <p>
          {" "}
          Vehicle: <span>Toyota Camry</span>
        </p>
        <p>
          {" "}
          Driver: <span>Ade Ayo</span>
        </p>
      </div>
    </div>
  );
};
const Pending = () => {
  return (
    <div className="order_details_detail ">
      <div className="order_detail_header pending">
        {" "}
        <GoVerified />{" "}
        <p>
          Pending : <span>05 Sep 2022 - 15 Sep 2022</span>{" "}
        </p>
      </div>
      <hr />
      <div className="order_detail">
        <p>
          {" "}
          Order ID: <span>#228-345-564-767</span>
        </p>
        <p>
          {" "}
          Item: <span>Clothes</span>
        </p>
        <p>
          {" "}
          Amount: <span>1,500</span>
        </p>
      </div>
      <div className="order_detail">
        <p>
          {" "}
          Shipping: <span>Paid</span>
        </p>
        <p>
          {" "}
          Vehicle: <span>Toyota Camry</span>
        </p>
        <p>
          {" "}
          Driver: <span>Ade Ayo</span>
        </p>
      </div>
    </div>
  );
};
const Cancelled = () => {
  return (
    <div className="order_details_detail">
      <div className="order_detail_header cancelled">
        {" "}
        <GoVerified />{" "}
        <p>
          Cancelled : <span>05 Sep 2022 - 15 Sep 2022</span>{" "}
        </p>
      </div>
      <hr />
      <div className="order_detail">
        <p>
          {" "}
          Order ID: <span>#228-345-564-767</span>
        </p>
        <p>
          {" "}
          Item: <span>Clothes</span>
        </p>
        <p>
          {" "}
          Amount: <span>1,500</span>
        </p>
      </div>
      <div className="order_detail">
        <p>
          {" "}
          Shipping: <span>Paid</span>
        </p>
        <p>
          {" "}
          Vehicle: <span>Toyota Camry</span>
        </p>
        <p>
          {" "}
          Driver: <span>Ade Ayo</span>
        </p>
      </div>
    </div>
  );
};
const All = () => {
  return (
    <div>
      <Delivered />
      <Pending />
      <Cancelled />
    </div>
  );
};

const orderTab = [
  {
    id: 1,
    label: "All",
    content: <All />,
  },
  {
    id: 2,
    label: "Delivered",
    content: <Delivered />,
  },
  {
    id: 3,
    label: "Pending",
    content: <Pending />,
  },
  {
    id: 4,
    label: "Cancelled",
    content: <Cancelled />,
  },
];

function Order() {
  const [activeTab, setActiveTab] = useState(orderTab[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div>
      <Navbar />

      <div className="order">
        <div className="order_left">
          <h1> Orders</h1>
          <div className="order_left_upper">
            <div className="order_left_upper_input">
              <input type="text" placeholder="Search" />
              <AiOutlineSearch />
            </div>

            <GrNotification />
          </div>
          <div className="order_details_button">
            {orderTab.map((tab) => (
              <button
                key={tab.id}
                className={`ordertab ${
                  activeTab.label === tab.label ? "active" : ""
                }`}
                onClick={() => handleTabClick(tab)}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
          <div className="order_details">{activeTab.content}</div>
        </div>
        <div className="order_right">
          <SideRight />
        </div>
      </div>
    </div>
  );
}

export default Order;
