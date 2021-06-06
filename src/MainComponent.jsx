import React from "react";
import SocialCard from "./SocialCard";

const MainComponent = () => {
  return (
    <div className="main">
      <h1>
        <div className="tag">{"<span id=\"hello\">"}</div> {" Hello! I am "}
        <u>Indrajit</u>
        {", a "}
        <span className="highlight">full stack web developer</span>
        {" and a "}
        <span className="highlight">Deep Learning enthusiast</span>
        {" from "} <span id="india">India! </span>
        <div className="tag">{"</span>"}</div>
        <a id="download-cv" href="https://drive.google.com/file/d/1TKVtScQ8BHpC3p3Uf4-JFrqeO4gCn-YY/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download CV</a>
      </h1>

      <div id="socialcards">
        <SocialCard
          src="./linkedin.png"
          url="https://www.linkedin.com/in/indrajit-vijayakumar-6b761869"
          data="LinkedIn"
        />
        <SocialCard
          src="./github.png"
          url="https://github.com/thisisindrajit"
          data="GitHub"
        />
        <SocialCard
          src="./twitter.png"
          url="https://twitter.com/indrajitmusic"
          data="Twitter"
        />
        <SocialCard
          src="./youtube.png"
          url="https://www.youtube.com/channel/UCvd_7o_qpO2VC6HPn7Huh_w?view_as=subscriber"
          data="YouTube"
        />
      </div>
    </div>
  );
};

export default MainComponent;
