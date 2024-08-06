import React from "react";
import "./Hero.css";
import hishamrehab from "../../images/hishamrehab.png";

const Hero = () => {
  return (
    <section className="hero flex">
      <div className="parent-avatar flex">
        <img className="avatar" src={hishamrehab} alt="" />
      </div>
      <div className="left-section">
        <h1 className="title">
          Hello,I'm Hisham Rehab,
          <br /> Front End Developer.
        </h1>
        <p className="sub-title">
          A Software Engineer and Front End Developer with a specialization in React.js. I have a strong history of creating dynamic and interactive web applications. My skills in React.js enable me to design smooth user experiences, and my solid knowledge of JavaScript, HTML, and CSS ensures that my code is both robust and easy to maintain. I excel in team settings and consistently deliver high-quality projects on schedule. Additionally, my experience with code reviews and agile methodologies allows me to effectively contribute to any development team.
        </p>
      </div>
    </section>
  );
};

export default Hero;
