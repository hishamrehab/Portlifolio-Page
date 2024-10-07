import React from "react";
import { BsLink45Deg } from "react-icons/bs";
import { AiFillGithub, AiOutlineArrowRight } from "react-icons/ai";

import "./Main.css";
const Card = ({ imgUrl, title, subTitle, githubLink, liveDemo }) => {
  return (

    <article className="card">
      <a href={liveDemo}>
        <img src={imgUrl} width={"266px"} alt="" />
      </a>

      <div style={{ width: "266px" }} className="box">
        <h1 className="hello" alt="">
          {title}
        </h1>
        <p className="sub-title">{subTitle}</p>
        <div className="flex icons">
          <div style={{ gap: "17px" }}>
            <a className="icon-link" href={liveDemo}>
              <BsLink45Deg />
            </a>
            <a className="icon-github" href={githubLink}>
              <AiFillGithub />
            </a>
          </div>
          <div className="more-link">
            <a className="link flex" href="" style={{ alignSelf: "end" }}>
              more

              <AiOutlineArrowRight className="arrow" />

            </a>
          </div>


        </div>
      </div>
    </article >

  );
};

export default Card;
