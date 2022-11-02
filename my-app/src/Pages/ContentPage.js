import React from "react";
import Header from "../Components/Header";
import "./ContentPage.css";
import logoLeft from "../Resources/Images/logoburnedinleft.png";
import play from "../Resources/Images/play.png";
import CategoryList from "../Components/CategoryList";
import SimpleImageSlider from "react-simple-image-slider";

export default function ContentPage() {
  const images = [
    { url: "https://g4.img-dpreview.com/5ADC4BE97EF846F2B04F94C0E90F0F0E.jpg" },
    { url: "https://g4.img-dpreview.com/42E27AEE01B4485ABE7020FCB5A745B9.jpg" },
  ];

  return (
    <>
      <div className="top-content-container">
        <div className="content-background"></div>
        <Header></Header>
        <div className="trailer-container">
          <a href="google.com">
            <div className="trailer-background"></div>
          </a>

          <div className="lol">
            <div className="trailer-title">
              <img style={{ width: "100%" }} src={logoLeft} />
            </div>
            <div className="regular-line-height">
              Eddie Murphy goes inside Eddie Murphy in an Eddie Murphy comedy.
            </div>
            <div className="play-button-container flex">
              <div className="play-button-box">
                <div className="play-button">
                  <div className="play-icon">
                    <div className="play-icon-2">
                      <img style={{ width: "100%" }} src={play} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="more-info-button">MORE INFO</div>
            </div>
          </div>
          <div className="below-trailer-shadow"></div>
        </div>
      </div>
      <div className="bottom-content-container">
        <CategoryList />
      </div>
      <SimpleImageSlider
        width={1300}
        height={800}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </>
  );
}
