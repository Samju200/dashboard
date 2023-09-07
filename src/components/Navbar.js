import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import {GrNotification } from 'react-icons/gr'
import Avatar from '@mui/material/Avatar';
import './navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <ul>
            <li><AiOutlineSearch className='navbar_icon'/></li>
            <li><GrNotification className='navbar_icon' /></li>
            <li className='avatar'>  <Avatar src='https://lh3.googleusercontent.com/ogw/AAEL6sigJphmVgWsqC7XtUTBcox0Wi2msckW-A1ybngV2g=s32-c-mo' className="avatar_sidebar">
        
        </Avatar>   <p>Adeyemi juwon</p></li>
        </ul>
    </div>
  )
}

export default Navbar