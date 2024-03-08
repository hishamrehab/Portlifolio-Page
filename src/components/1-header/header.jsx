import { useEffect, useState } from "react";
import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import "./header.css";
const Header = () => {
  const [showModel, setShowModel] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("currentMode") ?? "dark" );

 useEffect(() => {
if(theme === "light") {
  document.body.classList.remove("dark");
  document.body.classList.add("light");
} else {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
}
},[theme])
   
   

  return (
    <header className="flex">
      <button onClick={() => setShowModel(true)} className="menu flex">
        <AiOutlineMenu />
      </button>
      <div />

      <nav>
        <ul className="flex">
          <li>
            <a href="">About </a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>

      <button
        onClick={() => {
          // senf value to loacal storage
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );

          // get value from LS
          setTheme(localStorage.getItem("currentMode"));
        }}
        className="mode flex"
      >
        {theme === "dark" ? (
          <BsFillMoonFill />
        ) : (
          <BsFillSunFill  className="icon-sun"/>
        )}
      </button>
      {showModel && (
        <div className="fixed">
          <ul className="model">
            <li>
              <button onClick={() => setShowModel(false)} className="mode">
                <AiOutlineCloseCircle />
              </button>
            </li>

            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Users</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
