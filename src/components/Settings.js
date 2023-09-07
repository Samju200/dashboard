import React, { useState } from "react";
import Navbar from "./Navbar";
import uploadImg from "./img/upload.png";
import "./settings.css";

const AccountSetting = () => {
  return (
    <div className="settings_form">
      <form>
        <h4> Your Profile Picture</h4>

        <div className="settings_file">
          <div className="file-upload">
            <img src={uploadImg} alt="upload" />
            <h3>Upload your photo</h3>
            <input type="file" />
          </div>
        </div>
        <hr />
        <div className="settings_input">
          <div>
            <label>Full Name </label>
            <input type="text" placeholder="Please enter your full name" />
          </div>
          <div>
            <label>Email </label>
            <input type="email" placeholder="Please enter your email" />
          </div>
        </div>
        <div className="settings_input">
          <div>
            <label>Username </label>
            <input type="text" placeholder="Please enter your Username" />
          </div>
          <div>
            <label>Phone number </label>
            <input type="number" placeholder="Please enter your Phone number" />
          </div>
        </div>
        <div className="settings_bio">
          <label> Bio</label>
          <textarea placeholder="Write your Bio here e.g your hobbies, interests ETC"></textarea>
        </div>
        <div className="setting_button">
          <button>Update Profile</button>
          <button>Reset</button>
        </div>
      </form>
    </div>
  );
};

const PasswordSetting = () => {
  return (
    <div className="password_setting">
      <h1>Password</h1>
      <p>Enter your current & new password to reset your password.</p>
      <form>
        <div className="setting_password">
          <label>Current Password</label>
          <input type="text" placeholder="Current Password" />
        </div>
        <hr />
        <div className="setting_password">
          <label>New Password</label>
          <input type="text" placeholder="New Password" />
        </div>
        <hr />
        <div className="setting_password">
          <label>Confirm Password</label>
          <input type="text" placeholder="Confirm Password" />
        </div>
        <hr />
        <div className="setting_button">
          <button>Update Profile</button>
          <button>Reset</button>
        </div>
      </form>
    </div>
  );
};
const settingTab = [
  {
    id: 1,
    label: "Account Setting",
    content: <AccountSetting />,
  },
  {
    id: 2,
    label: "Password  Setting",
    content: <PasswordSetting />,
  },
];

function Settings() {
  const [activeTab, setActiveTab] = useState(settingTab[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div>
      <Navbar />
      <div className="settings">
        <div className="settings_button">
          {settingTab.map((tab) => (
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
        {activeTab.content}
      </div>
    </div>
  );
}

export default Settings;
