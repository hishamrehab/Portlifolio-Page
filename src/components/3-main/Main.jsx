import React, { useState } from "react";
import { BsLink45Deg } from "react-icons/bs";
import { AiFillGithub, AiOutlineArrowRight } from "react-icons/ai";
import image1 from "./images/image1.jpeg";
import "./Main.css";
import { myProjects } from "./Myprojects";



const Main = (buttonCategory) => {
  const [currentActive, setCurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

   const handleClick = (buttonCategory) => {
    setCurrentActive(buttonCategory);


    const newArry = myProjects.filter((item) => {
      const zzz = item.category.find((myItem) => {
        return myItem === buttonCategory
      })
      return zzz === buttonCategory;
    })
    setArr(newArry)
   }

  return (
    <main className="flex">
      {/* =================================================== */}
      <section className=" flex left-section">
        <button
          onClick={() => {
            handleClick("react");
          }}
          className={currentActive === "all" ? "active" : null}
        >
          all projects
        </button>

        <button
          onClick={() => {
            handleClick("css");
          }}
          className={currentActive == ["css"] ? "active" : null}
        >
          Html & CSS
        </button>

        <button
          onClick={() => {
            handleClick("css");
          }}
          className={currentActive == "bootstarb" ? "active" : null}
        >
          Bootstrab & Tailwand 
        </button>

        <button className={currentActive === "js" ? "active" : null}>
         JavaScript
        </button>
        <button className={currentActive === "js" ? "active" : null}>
          React & MUI
        </button>
      </section>

      {/* ================================================= */}
      <section className="flex right-section">
        {arr.map((item) => {
          return (
            <article key={item.imgPath} className="card">
              <img src={image1} width={"266px"} alt="" />
              <div style={{ width: "266px" }} className="box">
                <h1 className="hello" alt="">
                  {item.projectsTitle}
                </h1>
                <p className="sub-title">
                  sub-title = desc Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Aut iusto quos alias esse commodi ea.
                  Inventore.
                </p>
                <div className="flex icons">
                  <div style={{ gap: "17px" }}>
                    <span className="icon-link">
                      <BsLink45Deg />
                    </span>
                    <span className="icon-github">
                      <AiFillGithub />
                    </span>
                  </div>
                  <a className="link flex" href="" style={{ alignSelf: "end" }}>
                    more
                    <span>
                      <AiOutlineArrowRight />
                    </span>
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Main;
