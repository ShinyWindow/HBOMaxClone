import { React, useState, useEffect } from "react";
import "./MovieRow.css";

export default function MovieRow(props) {
  const [wid, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const aspectRatio = props.aspectRatio ? props.aspectRatio : "8/11";
  const width = props.width ? props.width : "14vw";
  const widthNumber = Number(width.substring(0, width.indexOf("v"))) * wid * .01;
  const aspectRatioNumber =
    aspectRatio.substring(aspectRatio.indexOf("/") + 1) /
    Number(aspectRatio.substring(0, aspectRatio.indexOf("/")));

  return (
    <div className="movie-containers">
      <div className="row-title">
        {props.title ? props.title : "Continue Watching"}
      </div>
      <div>
        <ul className="movie-list">
          <li
            className={"movie-item"}
            style={{ width: width, aspectRatio: aspectRatio }}
          >
            <img
              className="movie-poster"
              src={require("../Resources/Images/movieposter" +
                Math.floor(Math.random() * (14 - 0 + 1) + 0) +
                ".jpg")}
            />
          </li>
          <li
            className={"movie-item"}
            style={{ width: width, aspectRatio: aspectRatio }}
          >
            <img
              className="movie-poster"
              src={require("../Resources/Images/movieposter" +
                Math.floor(Math.random() * (14 - 0 + 1) + 0) +
                ".jpg")}
            />
          </li>
          <li
            className={"movie-item"}
            style={{ width: width, aspectRatio: aspectRatio }}
          >
            <img
              className="movie-poster"
              src={require("../Resources/Images/movieposter" +
                Math.floor(Math.random() * (14 - 0 + 1) + 0) +
                ".jpg")}
            />
          </li>
          <li
            className={"movie-item"}
            style={{ width: width, aspectRatio: aspectRatio }}
          >
            <img
              className="movie-poster"
              src={require("../Resources/Images/movieposter" +
                Math.floor(Math.random() * (14 - 0 + 1) + 0) +
                ".jpg")}
            />
          </li>
          <li
            className={"movie-item"}
            style={{ width: width, aspectRatio: aspectRatio }}
          >
            <img
              className="movie-poster"
              src={require("../Resources/Images/movieposter" +
                Math.floor(Math.random() * (14 - 0 + 1) + 0) +
                ".jpg")}
            />
          </li>
          <li
            className={"movie-item"}
            style={{ width: width, aspectRatio: aspectRatio }}
          >
            <img
              className="movie-poster"
              src={require("../Resources/Images/movieposter" +
                Math.floor(Math.random() * (14 - 0 + 1) + 0) +
                ".jpg")}
            />
          </li>
          <li
            className={"movie-item"}
            style={{ width: width, aspectRatio: aspectRatio }}
          >
            <img
              className="movie-poster"
              src={require("../Resources/Images/movieposter" +
                Math.floor(Math.random() * (14 - 0 + 1) + 0) +
                ".jpg")}
            />
          </li>
          <li
            className={"movie-item"}
            style={{ width: width, aspectRatio: aspectRatio }}
          >
            <img
              className="movie-poster"
              src={require("../Resources/Images/movieposter" +
                Math.floor(Math.random() * (14 - 0 + 1) + 0) +
                ".jpg")}
            />
          </li>
          <li
            className={"movie-item"}
            style={{ width: width, aspectRatio: aspectRatio }}
          >
            <img
              className="movie-poster"
              src={require("../Resources/Images/movieposter" +
                Math.floor(Math.random() * (14 - 0 + 1) + 0) +
                ".jpg")}
            />
          </li>
          <li
            className={"movie-item"}
            style={{ width: width, aspectRatio: aspectRatio }}
          >
            <img
              className="movie-poster"
              src={require("../Resources/Images/movieposter" +
                Math.floor(Math.random() * (14 - 0 + 1) + 0) +
                ".jpg")}
            />
          </li>
          <li
            className={"movie-item"}
            style={{ width: width, aspectRatio: aspectRatio }}
          >
            <img
              className="movie-poster"
              src={require("../Resources/Images/movieposter" +
                Math.floor(Math.random() * (14 - 0 + 1) + 0) +
                ".jpg")}
            />
          </li>
        </ul>
        <div
          className="test-2 test-2-left"
          style={{ height: widthNumber * aspectRatioNumber }}
        >
          HI
        </div>
        <div
          className="test-2-right test-2"
          style={{ height: widthNumber * aspectRatioNumber }}
        >
          HI
        </div>
        <div style={{height: widthNumber * aspectRatioNumber}}></div>
      </div>
    </div>
  );
}
