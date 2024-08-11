import "./Main.css";
import Card from "./Card";
import logo from "../../images/logo.png";
import gallery from "../../images/gallery-3 (1).jpg";
import work from "../../images/original-1a2d5c4015c609fc997140d72fd58d49.png";
import heroPanner from "../../images/hero-banner (1).png";
import portifolio from "../../images/hishamrehab.png";
import bg from "../../images/bg.jpg";
import Image4 from "../../images/image4.jpeg";
import Movie from "../../images/2be690db-d73c-484b-b698-11f94c021411-cover.png"
import Ecommerce from "../../images/Image_-_E-Commerce_Website_.jpeg.webp"
import Ecommecer2 from "../../images/Creating an e-commerce Website with HTML, CSS, and JavaScript.jpg"
import Iphone from "../../images/fall-2023-iphone-colors-iphone-15-pro-max.png"
import AdminDashboard from "../../images/download.png"
import TaskMangement from "../../images/download (1).png"
import Emcommerce3 from "../../images/Types-of-eCommerce-Websites-1024x538.jpg"



const Main = () => {
  return (
    <main>
      {/* =================================================== */}
      <h2>MainSkills</h2>
      <section className="flex left-section" id="skills">

        <div>React Js</div>
        <div>React Router Dom</div>
        <div>Redux</div>
        <div>Redux Toolkit</div>
        <div>React Query</div>
        <div>React Bootstrap</div>
        <div>Material Ui (MUI)</div>
        <div>React Styled Components</div>
        <div>JavaScript</div>
        <div>ES6</div>
        <div>TypeScript </div>
        <div>JQuery </div>
        <div>HTML5  </div>
        <div>CSS </div>
        <div>CSS3  </div>
        <div>SASS   </div>
        <div>Bootstrap     </div>
        <div> Tailwand CSS </div>
        <div> Vercel  </div>
        <div> Firebase</div>
        <div>  Netlify</div>
        <div> Github Pages </div>
        <div>Render  </div>
        <div>Supabase   </div>
        <div>Git </div>
        <div> GitLab </div>
        <div>  Github </div>

      </section>

      {/* { imgUrl, title, subTitle, githubLink, liveDemo } */}
      {/* ================================================= */}

      <section className="flex right-section" id="projects">
        <Card
          imgUrl={Movie}
          title="Ultimate MovieHub"
          subTitle="Ultimate MovieHub is a user-friendly movie site built with React, Redux Toolkit, Material UI, Vite, Firebase, and IMDb. It features a searchable movie catalog, user authentication, and a responsive design for all devices, along with user reviews, ratings, dark/light mode, and personalized recommendations. "
          githubLink="https://github.com/hishamrehab/Movies-Website"
          liveDemo="https://movie-app-react-js-a71bd.web.app/"
        />

        <Card
          imgUrl={Ecommerce}
          title="ShopEase Website"
          subTitle="Developed a fully functional eCommerce site using React.js, React Router Dom, Vite, Bootstrap, Sass, React Countup Library, and Swiper. The site features a responsive interface, user authentication, product browsing, secure payments, real-time inventory updates, and personalized recommendations for enhanced user engagement. "
          githubLink="https://github.com/hishamrehab/Ecommerce-Website-React-js"
          liveDemo="https://full-ecommerce-website.web.app/"
        />

        <Card
          imgUrl={Ecommecer2}
          title="Ecommerce Website"
          subTitle=" Utilized React JS, CSS, Tailwind CSS, MUI, Axios, Fake Store API, Redux Toolkit, React Bootstrap, SCSS, Swiper, deployed on Firebase. This project showcases products that users can filter by category, with each category having its own page for selecting, adding, removing, or adjusting product quantities. It also stores selections in local storage."
          githubLink="https://github.com/hishamrehab/EcommerceWebsiteWithReduxToolkit"
          liveDemo="https://ecommerce-react--reduxtoolkit.web.app/"
        />


        <Card
          imgUrl={Iphone}
          title="iPhoneWorld"
          subTitle=" The iPhone website offers tips for enhancing user experience. It includes features, troubleshooting advice, and easy-to-follow guides for every user. The site is developed using React.js and TailwindCSS and features GSAP animations and Three.js to display iPhone 15 Pro models in various colors and shapes."
          githubLink="https://github.com/hishamrehab/Apple-iphone"
          liveDemo="https://apple-website-three-sigma.vercel.app/"
        />

        <Card
          imgUrl={gallery}
          title="Tours Website With Booking System"
          subTitle="Utilized React, React Bootstrap, and Redux with internal data files. The site offers a simple tour booking system, showcases our mission, includes traveler reviews, and highlights custom services. Discover featured tours, popular attractions, special packages, and traveler photos. Meet our expert team and read testimonials."
          githubLink="https://github.com/hishamrehab/Tours-Website-React-js"
          liveDemo="https://tours-website-react-js.vercel.app/#services"
        />

        <Card
          imgUrl={logo}
          title="YouTube Clone"
          subTitle="Built with React, React Router DOM, Material-UI, and Axios, YouTube is a dynamic video-sharing platform for watching and sharing videos. The user-friendly interface enables smooth playback, effective searching, and tailored recommendations, plus live streaming and monetization options.  "
          githubLink="https://github.com/hishamrehab/YouTube"
          liveDemo="https://you-tube-nzf7.vercel.app/"
        />


        <Card
          imgUrl={AdminDashboard}
          title="React Admin Panel"
          subTitle="Developed and managed multiple scalable B2B admin panels using React, React Router, Material UI, and CSS, leveraging the React-Admin framework. Implemented user authentication, dynamic data visualization, and real-time updates to enhance performance and user experience. "
          githubLink="https://github.com/hishamrehab/Admin-Panel"
          liveDemo="https://admin-panel-c23b0.firebaseapp.com/"
        />


        <Card
          imgUrl={Emcommerce3}
          title="E-commerce Website JavaScript"
          subTitle="Developed a responsive e-commerce website using HTML, CSS, and JavaScript with a dynamic product catalog and secure checkout. Implemented client-side form validation and interactive UI elements, ensuring cross-browser compatibility."
          githubLink="https://github.com/hishamrehab/Ecommerce-Website"
          liveDemo="https://ecommerce-website-topaz-one.vercel.app/"
        />


        <Card
          imgUrl={Image4}
          title="Rools Resturant"
          subTitle=" Utilizing React , Sass ,Internal Data File : Leveraged internal data files for efficient storage and Progressive Web Apps (PWAs) .and deploy the project on Vercel."
          githubLink="https://github.com/hishamrehab/Rolls-restaurant"
          liveDemo="https://rolls-restaurant.vercel.app/"
        />


        <Card
          imgUrl={bg}
          title="Weather App"
          subTitle=" Utilizing React Js , CSS and Axios Library. for an exceptional user experience.and deploy the project on Vercel."
          githubLink="https://github.com/hishamrehab/Weather-App-React-Js"
          liveDemo="https://weather-app-react-js-ruddy.vercel.app/"
        />


        <Card
          imgUrl={TaskMangement}
          title="Online Task Mangement"
          subTitle="Created an online task management app that allows users to add, edit, update, and delete tasks, plus clear all tasks. It uses local storage for data persistence, ensuring a smooth experience.
            Technical Skills: React Js & CSS, task management functions, local storage for saving tasks and project themes."
          githubLink="https://github.com/hishamrehab/Online-Task-Mangement"
          liveDemo="https://online-task-mangement.vercel.app/"
        />


        <Card
          imgUrl={work}
          title="Car Rental Website"
          subTitle=" This car rental site uses HTML, CSS, JavaScript, Bootstrap, Font Awesome, AOS Animation, Tailwind CSS, and jQuery for a responsive experience. "
          githubLink="https://github.com/hishamrehab/car-rental-website"
          liveDemo="https://cars-rental-website.vercel.app/"
        />


        <Card
          imgUrl={heroPanner}
          title="Education Website"
          subTitle="This fully responsive LMS educational website is built with HTML, CSS, JavaScript, Tailwind CSS, and Bootstrap. It provides an optimal experience for students and educators across devices, focusing on scalability and efficiency."
          githubLink="https://github.com/hishamrehab/Education-Website"
          liveDemo="https://education-website-black.vercel.app/"
        />



      </section>
    </main>
  );
};

export default Main;
