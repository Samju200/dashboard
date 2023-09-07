import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { GrNotification } from "react-icons/gr";
import Navbar from "./Navbar";
import "./shipment.css";

const ShipmentOrder = (props) => {
  return (
    <div
      className={`${
        props.Shipment_Status === "Completed" ? "completed" : "transit"
      }`}
    >
      <ul className="ship_shipment_table">
        <li>{props.Items}</li>
        <li>{props.Tracking_id}</li>
        <li>{props.Total_Weight}</li>
        <li>{props.Shipment_Status}</li>
        <li>{props.Estimated_Arrival}</li>
        <li>{props.Destination}</li>
      </ul>
      <hr />
    </div>
  );
};

const Transit = () => {
  return (
    <div>
      <ShipmentOrder
        Items="Sofa Chair"
        Tracking_id="129h8nk"
        Total_Weight="40kg"
        Shipment_Status="In Transit"
        Estimated_Arrival="2 days"
        Destination="Lekki, Lagos "
      />
      <ShipmentOrder
        Items="Sofa Chair"
        Tracking_id="129h8nk"
        Total_Weight="40kg"
        Shipment_Status="In Transit"
        Estimated_Arrival="2 days"
        Destination="Lekki, Lagos "
      />
    </div>
  );
};
const Completed = () => {
  return (
    <div>
      <ShipmentOrder
        Items="Sofa Chair"
        Tracking_id="129h8nk"
        Total_Weight="40kg"
        Shipment_Status="Completed"
        Estimated_Arrival="2 days"
        Destination="Lekki, Lagos "
      />
      ,
      <ShipmentOrder
        Items="Sofa Chair"
        Tracking_id="129h8nk"
        Total_Weight="40kg"
        Shipment_Status="Completed"
        Estimated_Arrival="2 days"
        Destination="Lekki, Lagos "
      />
    </div>
  );
};
const All = () => (
  <div>
    <Transit />
    <Completed />
  </div>
);

const shipmentTab = [
  {
    id: 1,
    label: "All",
    content: <All />,
  },
  {
    id: 2,
    label: "In Transit",
    content: <Transit />,
  },
  {
    id: 3,
    label: "Completed",
    content: <Completed />,
  },
];

function Shipment() {
  const [activeTab, setActiveTab] = useState(shipmentTab[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div>
      <Navbar />
      <div className="shipment">
        <div className="shipment_header">
          <h1> Shipment</h1>
          <div>
            {shipmentTab.map((tab) => (
              <button
                key={tab.id}
                className={`shipmenttab ${
                  activeTab.label === tab.label ? "active" : ""
                }`}
                onClick={() => handleTabClick(tab)}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="shipment_middle">
          <div className="shipment_input">
            <input type="text" placeholder="Search" />
            <AiOutlineSearch />
          </div>

          <div>
            <GrNotification />
            <AiOutlineMenu />
          </div>
        </div>

        <div className="shipment_table">
          <div className="ship_table">
            <ul className="ship_shipment_table">
              <li>Items</li>
              <li>Tracking ID</li>
              <li>Total Weight</li>
              <li>Shipment Status</li>
              <li>Estimated Arrival</li>
              <li>Destination</li>
            </ul>
            <hr />
          </div>

          {activeTab.content}
        </div>
      </div>
    </div>
  );
}

export default Shipment;
