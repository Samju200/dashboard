import React, { useState } from 'react'
import './side.css';
import { AiOutlineDashboard, AiOutlineSetting, AiOutlineShoppingCart, AiOutlineLogout } from 'react-icons/ai';
import {FcShipped, FcSupport} from 'react-icons/fc'
import Dashboard from './Dashboard';
import Order from './Order';
import Settings from './Settings';
import Support from './Support';
import Shipment from './Shipment';

const SideTabs1 = [
    {
      id: 1,
      label: "Dashboard",
      icon: <AiOutlineDashboard/>,
      content: <Dashboard/>
    },
    {
      id: 2,
      label: "Order",
      icon: <AiOutlineShoppingCart/>,
      content: <Order/>
    },
    {
      id: 3,
      label: "Shipment",
      icon: <FcShipped/>,
      content: <Shipment/>
    }
  ];
  
  const SideTabs2 = [
    {
      id: 1,
      label: "Settings",
      icon: <AiOutlineSetting/>,
      content: <Settings/>
    },
    {
      id: 2,
      label: "Support",
      icon: <FcSupport/>,
      content: <Support/>
    },
   
  ];
  

function Side() {
    const [activeTab, setActiveTab] = useState(SideTabs1[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="dashboard">  
    <div className='left_side'>
        <div className='upper_header'>
            <h1 className='logo'> FETCH.</h1>
            <div className='upper_header_first'>
            <ul  className='side_list'>
            {SideTabs1.map((tab) => (
          <button
            key={tab.id}
            className={`sidetab ${activeTab.label === tab.label ? "active" : ""}`}
            onClick={() => handleTabClick(tab)}
          >
           {tab.icon}<span>{tab.label}</span> 
          </button>
        ))}
                </ul>  
               
            </div>
            <div className='upper_header_second'>
            <ul className='side_list'  >
            {SideTabs2.map((tab) => (
          <button
            key={tab.id}
            className={`sidetab ${activeTab.label === tab.label ? "active" : ""}`}
            onClick={() => handleTabClick(tab)}
          >
           {tab.icon}<span>{tab.label}</span> 
          </button>
        ))}
                    
                </ul>
            </div>
        </div>
        <div className='lower_header'>
            <button> <AiOutlineLogout/> <span>Sign Out</span></button>
        </div>
    </div>
    <div className='right_side'>
       
        {activeTab.content}
     
    </div>
    </div>
  )
}

export default Side