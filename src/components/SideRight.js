
import './sideRight.css';
import React, { useState } from "react";
import ProgressChart from './ProgressChart';
import { AiOutlineLaptop, AiOutlineShoppingCart } from 'react-icons/ai'
import { GiEarwig } from 'react-icons/gi'
import Card from './img/atm.jpeg'





function SideRight(props) {
  return (
    <div className='sideRight'>
        <div className='sideRight_upper'>
            <h2> Ongoing Deliveries</h2>
            <div >
            <ProgressChart title='laptop' progress='55' icon ={<AiOutlineLaptop/>} bcolor='#F5FAFF' color='#175CD3'/>
            <ProgressChart title='Wig' progress='75' icon ={<GiEarwig/>} bcolor='#FEF6FB' color='#C11574'/>
            <ProgressChart title='Bestie’s Gift' progress='70' icon ={<AiOutlineShoppingCart/> } bcolor='#F5FAFF' color='#175CD3'/>
            <ProgressChart title='Mat' progress='90' icon ={<AiOutlineLaptop/>} bcolor='#F6FEF9' color='#027A48'/>
            </div>


        </div>
        <div className='sideRight_lower'>
            <div>
            <h2>My Card</h2>
            <p>...</p>
            </div>
            <img src={Card} alt=''/>
            <button>Start Order</button>
        </div>
        
    </div>
  )
}

export default SideRight