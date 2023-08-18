import React from "react";
import "./Header.css";
import hbologo from "../Resources/Images/hbo-max-h-w-l.svg";
import hamburger from "../Resources/Images/hamburger.png";
import search from "../Resources/Images/search.png";

export default function Header() {
  let signin = true;
  return (
    <div className="header flex-center">
      <div className="flex-between">
        <div className="flex-between header-left">
          <img
            alt="hamburger icon"
            className="hamburger-icon"
            src={hamburger}
          />
          <a href="./content" className="movies-series">
            Movies
          </a>
          <a href="./content" className="movies-series">
            Series
          </a>
        </div>
        <div className="margin-vertical-auto">
          <a href="./content">
            <img alt="hbo logo" className="hbo-logo-middle" src={hbologo} />
          </a>
        </div>
        <div className="flex-between header-right">
          <img alt="searchbar" className="hamburger-icon" src={search} />

          {signin ? (
            <div className="flex">
              <div className="margin-left-25 personal-icon">
                <div className="personal-icon-child-1"></div>
                <div className="personal-icon-child-2">W</div>
              </div>
              <a href="./content" className="movies-series profile-name">
                William
              </a>
            </div>
          ) : (
            <>
              <a href="./content" className=" margin-left-25 movies-series profile-name">
                Sign In
              </a>
              <a href="./content" className="margin-left-25 movies-series profile-name view-button">
                View
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
