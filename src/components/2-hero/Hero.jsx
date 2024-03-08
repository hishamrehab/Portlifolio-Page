import React from "react";
import "./Hero.css";


const Hero = () => {
 return (
   <section className="hero flex">
     <div className="left-section">
       <h1 className="title">
         Hello,I'm Hisham Rehab,
         <br /> Front End Developer.
       </h1>
       <p className="sub-title">
         A Software Engineer and web developer with Internet experience and
         passion for work and the ability to solve problems, I create websites
         that are responsive to all screens. Proficient in HTML, CSS and
         JavaScript, React Js and Material ui , Bootstrab and Tailwand Css , UI
         & UX , GitHub , Git and AI Tools.{""}
       </p>

   
     </div>
     <div className="parent-avatar flex">
       <img className="avatar" src="hishamrehab.png" alt="" />
    
     </div>
   </section>
 );
};

export default Hero;


















