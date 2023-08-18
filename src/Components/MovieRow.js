import { React, useState, useEffect, useRef } from "react";
import "./MovieRow.css";
import img0 from '../Resources/Images/movieposter0.jpg';
import img1 from '../Resources/Images/movieposter1.jpg';
import img2 from '../Resources/Images/movieposter2.jpg';
import img3 from '../Resources/Images/movieposter3.jpg';
import img4 from '../Resources/Images/movieposter4.jpg';
import img5 from '../Resources/Images/movieposter5.jpg';
import img6 from '../Resources/Images/movieposter6.jpg';
import img7 from '../Resources/Images/movieposter7.jpg';
import img8 from '../Resources/Images/movieposter8.jpg';
import img9 from '../Resources/Images/movieposter9.jpg';
import img10 from '../Resources/Images/movieposter10.jpg';
import img11 from '../Resources/Images/movieposter11.jpg';
import img12 from '../Resources/Images/movieposter12.jpg';
import img13 from '../Resources/Images/movieposter13.jpg';
import img14 from '../Resources/Images/movieposter14.jpg';

const images = [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14];


export default function MovieRow(props) {
  const [offset, setOffset] = useState("0");
  const [translate, setTranslate] = useState("0");
  const [wid, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const [selectedImages, setSelectedImages] = useState([]);

  useEffect(() => {
    // This will run once when the component mounts
    const randomlySelectedImages = Array(12).fill(0).map(() => images[Math.floor(Math.random() * 15)]);
    setSelectedImages(randomlySelectedImages);
  }, []); // Note the empty dependency array

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
  useEffect(() => { }, []);

  function getRight(positivity) {
    const pageWidth = positivity * wid;
    let distance = offset - pageWidth;

    console.log(distance * -1 + ' > ' + (ref.current.offsetWidth - wid))
    if (distance * -1 > (ref.current.offsetWidth - wid))
      distance = -(ref.current.offsetWidth - wid) - (wid * .04);

    if (distance * -1 < 0)
      distance = 0;

    setOffset(distance);
    return distance;
  }

  function getSrc() {
    const randomIndex = Math.floor(Math.random() * 15);
    return images[randomIndex];
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
            {selectedImages.map((imgSrc, idx) => (
              <li
                key={idx} // use the index as a key for simplicity
                className={"movie-item"}
                style={{ width: width, aspectRatio: aspectRatio }}
              >
                <img className="movie-poster" src={imgSrc} />
              </li>
            ))}
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

