import React from "react";
import { AiFillWechat, AiOutlineMail } from "react-icons/ai";
import { BsChatLeftText } from "react-icons/bs";
import Navbar from "./Navbar";
import "./support.css";

function Support() {
  return (
    <div>
      <Navbar />
      <div className="support">
        <h1> Help Center</h1>
        <p>Tell us how we can help</p>
        <p>Our Crew of superheroes are standing by for service & support!</p>
        <div className="support_route">
          <div className="support_route_text">
            <AiFillWechat className="support_icon" />
            <div className="support_text">
              <h3>Chat</h3>
              <p>Start a conversation now</p>
            </div>
          </div>
          <div className="support_route_text">
            <BsChatLeftText className="support_icon" />
            <div className="support_text">
              <h3>Chat</h3>
              <p>Find intelligent answers instantly</p>
            </div>
          </div>
          <div className="support_route_text">
            <AiOutlineMail className="support_icon" />
            <div className="support_text">
              <h3>Email</h3>
              <p>Start a conversation now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
