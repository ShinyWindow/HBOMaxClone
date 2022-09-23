import React from "react";
import Header from "../Components/Header";
import "./ContentPage.css";

export default function ContentPage() {
  return (
    <div>
      <div className="content-background"></div>
      <Header></Header>
      <div className="trailer-container">
        <div className="trailer-background"></div>
        <div className="below-trailer-shadow"></div>
      </div>
    </div>
  );
}
