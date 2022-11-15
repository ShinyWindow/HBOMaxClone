import { React, useState, useEffect, useRef } from "react";
import "./MovieRow.css";
import img from "../Resources/Images/movieposter1.jpg";

export default function MovieRow(props) {
  const [offset, setOffset] = useState("0");
  const [translate, setTranslate] = useState("0");
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
  const widthNumber =
    Number(width.substring(0, width.indexOf("v"))) * wid * 0.01;
  const aspectRatioNumber =
    aspectRatio.substring(aspectRatio.indexOf("/") + 1) /
    Number(aspectRatio.substring(0, aspectRatio.indexOf("/")));

  const ref = useRef(0);
  useEffect(() => {}, []);

  function getRight(positivity) {
    const pageWidth = positivity * wid;
    let distance = offset - pageWidth;

    console.log(distance*-1 + ' > ' + (ref.current.offsetWidth - wid))
    if(distance*-1 > (ref.current.offsetWidth - wid))
      distance = -(ref.current.offsetWidth - wid) - (wid * .04);

    if(distance*-1 < 0)
      distance = 0;

    setOffset(distance);
    return distance;
  }

  return (
    <div className="movie-containers">
      <div className="row-title">
        {props.title ? props.title : "Continue Watching"}
      </div>
      <div>
        <div
          className="movie-list-container"
          style={{ transform: "translateX(" + translate + ")" }}
        >
          <ul ref={ref} className="movie-list">
            <li
              className={"movie-item"}
              style={{ width: width, aspectRatio: aspectRatio }}
            >
              <img className="movie-poster" src={img} />
            </li>
            <li
              className={"movie-item"}
              style={{ width: width, aspectRatio: aspectRatio }}
            >
              <img className="movie-poster" src={img} />
            </li>
            <li
              className={"movie-item"}
              style={{ width: width, aspectRatio: aspectRatio }}
            >
              <img className="movie-poster" src={img} />
            </li>
            <li
              className={"movie-item"}
              style={{ width: width, aspectRatio: aspectRatio }}
            >
              <img className="movie-poster" src={img} />
            </li>
            <li
              className={"movie-item"}
              style={{ width: width, aspectRatio: aspectRatio }}
            >
              <img className="movie-poster" src={img} />
            </li>
            <li
              className={"movie-item"}
              style={{ width: width, aspectRatio: aspectRatio }}
            >
              <img className="movie-poster" src={img} />
            </li>
            <li
              className={"movie-item"}
              style={{ width: width, aspectRatio: aspectRatio }}
            >
              <img className="movie-poster" src={img} />
            </li>
            <li
              className={"movie-item"}
              style={{ width: width, aspectRatio: aspectRatio }}
            >
              <img className="movie-poster" src={img} />
            </li>
            <li
              className={"movie-item"}
              style={{ width: width, aspectRatio: aspectRatio }}
            >
              <img className="movie-poster" src={img} />
            </li>
            <li
              className={"movie-item"}
              style={{ width: width, aspectRatio: aspectRatio }}
            >
              <img className="movie-poster" src={img} />
            </li>
            <li
              className={"movie-item"}
              style={{ width: width, aspectRatio: aspectRatio }}
            >
              <img className="movie-poster" src={img} />
            </li>
            <li
              className={"movie-item"}
              style={{ width: width, aspectRatio: aspectRatio }}
            >
              <img className="movie-poster" src={img} />
            </li>
          </ul>
        </div>

        <div
          className="scroll-button scroll-left"
          onClick={() => setTranslate(getRight(-1) + "px")}
          style={{ height: widthNumber * aspectRatioNumber }}
        >
          HI
        </div>
        <div
          className="scroll-button scroll-right"
          onClick={() => setTranslate(getRight(1) + "px")}
          style={{ height: widthNumber * aspectRatioNumber }}
        >
          HI
        </div>
        <div style={{ height: widthNumber * aspectRatioNumber }}></div>
      </div>
    </div>
  );
}
