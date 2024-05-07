import "./Main.css";
import Card from "./Card";
import blog from "../../images/blog-4.jpg";
import logo from "../../images/logo.png";
import gallery from "../../images/gallery-3 (1).jpg";
import work from "../../images/work-2.jpg";
import heroPanner from "../../images/hero-banner (1).png";
import portifolio from "../../images/hishamrehab.png";
import bg from "../../images/bg.jpg";
import Image4 from "../../images/image4.jpeg";

const Main = () => {
  return (
    <main>
      {/* =================================================== */}
      <h2>MainSkills</h2>
      <section className="flex left-section">
        <div>Html</div>
        <div>CSS</div>
        <div>JavaScript</div>
        <div>TypeScript</div>
        <div>React Js</div>
        <div>ReduxToolkit</div>
        <div>Bootstrap</div>
        <div>Tailwand Css</div>
        <div>MUI</div>

        <div>Scss</div>
        <div>Responsiveness</div>
        <div>Adaptive Design</div>
      </section>

      {/* { imgUrl, title, subTitle, githubLink, liveDemo } */}
      {/* ================================================= */}

      <section className="flex right-section">
        <Card
          imgUrl={blog}
          title="Ecommerce Website"
          subTitle="Utilizing React , CSS  , Bootstrap , Tailwind , Material-UI (MUI)  ,Axios , Axios , •Redux Toolkit , SCSS and Swiper and deploy the project on Vercel.  "
          githubLink="https://github.com/hishamrehab/EcommerceWebsiteWithReduxToolkit"
          liveDemo="https://ecommerce-react--reduxtoolkit.web.app/"
        />

        <Card
          imgUrl={gallery}
          title="Tours Website"
          subTitle="Utilizing Seamlessly integrated React Router, Material-UI (MUI) ,MUI Icons and Axios to optimize navigation and streamline API data retrieval for an exceptional user experience.deploy the project on Vercel.  "
          githubLink="https://github.com/hishamrehab/Tours-Website-React-js"
          liveDemo="https://tours-website-react-js.vercel.app/"
        />

        <Card
          imgUrl={logo}
          title="YouTube Clone"
          subTitle="Utilizing Seamlessly integrated React Router, Material-UI (MUI) ,MUI Icons and Axios to optimize navigation and streamline API data retrieval for an exceptional user experience.deploy the project on Vercel.  "
          githubLink="https://github.com/hishamrehab/YouTube"
          liveDemo="https://you-tube-nzf7.vercel.app/"
        />

        <Card
          imgUrl={work}
          title="Cars Store"
          subTitle=" Utilizing HTML, CSS, JavaScript, Bootstrap, Font Awesome, AOS, and Tailwind CSS , Jquery , FirebaseSeam (MUIdata retrievalce) and deploy the project on Vercel."
          githubLink="https://github.com/hishamrehab/carsStore"
          liveDemo="https://cars-store-omega.vercel.app/"
        />

        <Card
          imgUrl={heroPanner}
          title="Education Website"
          subTitle=" Utilizing HTML, CSS, JavaScript, Bootstrap, Font Awesome, AOS, and Tailwind CSS , Jquery , FirebaseSeam (MUIdata retrievalce) and deploy the project on Vercel."
          githubLink="https://github.com/hishamrehab/Education-Website"
          liveDemo="https://education-website-black.vercel.app/"
        />

        <Card
          imgUrl={portifolio}
          title="portifolio Page"
          subTitle=" Utilizing React js ,Css , Vite retrieval for an exceptional user experience.and deploy the project on Firebase."
          githubLink="https://github.com/hishamrehab/Portlifolio-Page"
          liveDemo="https://portifolio-fd23c.web.app/"
        />

        <Card
          imgUrl={bg}
          title="weather app"
          subTitle=" Utilizing React Js , CSS and Axios Library. for an exceptional user experience.and deploy the project on Vercel."
          githubLink="https://github.com/hishamrehab/Weather-App-React-Js"
          liveDemo="https://weather-app-react-js-ruddy.vercel.app/"
        />

        <Card
          imgUrl={Image4}
          title="Restaurant Website "
          subTitle=" Utilizing React , Sass ,Internal Data File : Leveraged internal data files for efficient storage and Progressive Web Apps (PWAs) .and deploy the project on Vercel."
          githubLink="https://github.com/hishamrehab/Rolls-restaurant"
          liveDemo="https://rolls-restaurant.vercel.app/"
        />
      </section>
    </main>
  );
};

export default Main;
