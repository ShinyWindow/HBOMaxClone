import React from "react";
import Header from "../Components/Header";
import "./SignInPage.css";

export default function SignInPage() {
  return (
    <div className="hbo-background">
      <Header />
      <div className="signin-top">
        <h2 className="flex-center margin-bottom-8 weight-600">Sign In</h2>
        <div className=" flex-center">
          <div className="signin-card">
            <div className="margin-bottom-8 average-signin-text">
              Do you have an HBO Max Account? Dw, fake sign in for now.
            </div>
            <div>
              <div className="margin-bottom-8">
                <input className="signin-option"></input>
                <div className="smallish-text">
                  You must enter an email address.
                </div>
              </div>
            </div>
            <div>
              <input className="signin-option margin-bottom-8"></input>
            </div>
            <div className="flex signin-button-card-container">
              <a href="./content" className="signin-button-card">SIGN IN</a>{" "}
              <div className="forgot-password flex-center flex-dir-col">
                Forgot Password?
              </div>
            </div>
            <div className="flex-between layout-line-container">
              <div className="layout-line"></div>
              <div className="layout-or">OR</div>
              <div className="layout-line"></div>
            </div>
            <div className='margin-bottom-8 average-signin-text'>
              View my personal HBO clone without access to real movies?
            </div>
            <a href="content" className='view-clone-button'>VIEW HBO CLONE</a>
          </div>
        </div>
      </div>
    </div>
  );
}
