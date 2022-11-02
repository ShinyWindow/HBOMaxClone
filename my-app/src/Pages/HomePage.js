import React from "react";
import HomeHeader from "../Components/HomeHeader";
import SimpleImageSlider from "react-simple-image-slider";

export default function HomePage() {
  const images = [
    { url: 'https://g4.img-dpreview.com/5ADC4BE97EF846F2B04F94C0E90F0F0E.jpg' },
    { url: 'https://g4.img-dpreview.com/42E27AEE01B4485ABE7020FCB5A745B9.jpg' },
  ];
  return (
    <>
      <HomeHeader />
      <SimpleImageSlider
        width={480}
        height={270}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </>
  );
}
