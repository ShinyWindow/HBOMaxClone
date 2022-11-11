import React from "react";
import "./Header.css";
import hbologo from "../Resources/Images/hbo-max-h-w-l.svg";

export default function HomeHeader() {
    return (
      <div className="home-header flex-between">
        <div className=" margin-vertical-auto">
          <img alt="lol" className="hbo-logo" src={hbologo} />
        </div>
        <div className="margin-vertical-auto flex">
          <div className="signin-button-container">
            <a className="signin-button" href="/signin">
              SIGN IN
            </a>
          </div>
          <div className="signin-button-container">
            <a className="signup-button" href="/signup">
              SIGN UP NOW
            </a>
          </div>
        </div>
      </div>
    );
  }