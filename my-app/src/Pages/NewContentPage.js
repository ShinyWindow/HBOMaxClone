import React from "react";
import ContentHeader from "../Components/ContentHeader";
import Header from "../Components/Header";
import MovieRow from "../Components/MovieRow";
import "./NewContentPage.css";

export default function NewContentPage() {
  return (
    <div className="overall-container">
      <div className="content-background"></div>
      <Header />
      {/* <div className="header-bar-container">
        <div className="header-bar">
          <div className="vertical-center logo">HBO MAX</div>
          <div className="header-selection-container">
            <div className="header-selection-items">Movies</div>
            <div className="header-selection-items">TV</div>
            <div className="header-selection-items">Other</div>
          </div>
          <div className="vertical-center">William</div>
        </div>
      </div> */}
      <div className="aspect top-background-image">
        <div className="test-1">
          <div className="display-title">
            <div className="display-info">1997 | PG-13 | 2h 14m</div>
            <div className="display-name">PRINCESS MONONOKE</div>
            <div className="display-genre">Animation | Action | Adventure</div>
            <div className="flex">
              <div className="imdb-logo">IMDB</div>
              <div className="display-info">8.5</div>
            </div>
            <div className="display-watch-button">Watch Now</div>
          </div>
        </div>
      </div>
      <div className="below-trailer-shadow"></div>
      <div className="movies-stuff">
        <MovieRow aspectRatio={'1/1'}/>
        <MovieRow title={"For You"} aspectRatio={'16/9'} width={'22vw'}/>
        <MovieRow title={"Just Added"} width={'22vw'}/>
        <MovieRow title={"New Episodes This Week"} aspectRatio={'16/9'} width={'22vw'}/>
        <MovieRow title={'Popular Movies'}/>
        <MovieRow title={'Popular TV'}/>
        <MovieRow title={"New Episodes This Week"} aspectRatio={'16/9'} width={'22vw'}/>
      </div>
    </div>
  );
}
