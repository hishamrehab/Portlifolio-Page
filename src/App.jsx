import { useEffect, useState } from "react";
import Header from "./components/1-header/header";
import Hero from "./components/2-hero/Hero";
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/footer";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { AiFillFunnelPlot } from "react-icons/ai";
function App() {
     
  useEffect (() => {
   {window.addEventListener("scroll" , () => {
    if (window.scrollY > 300) {
      setShowScrollBtn(true)
    } else {
      setShowScrollBtn(false)
    }
   })}
  } , [])
  const [showScrollBtn , setShowScrollBtn] = useState(false)


  return (
    <div id="up" className="container">
      <Header />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />
      <div className="divider" />
      <a
        style={{ opacity: showScrollBtn ? 1 : 0, transition: "1s" }}
        href="#up"
      >
        <button className="scrolltoTop">
          <BsArrowUpCircleFill />
        </button>
      </a>
    </div>
  );
}

export default App;
