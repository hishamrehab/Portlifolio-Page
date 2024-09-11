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
        <div>Next Js</div>
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

        <Card
          imgUrl="data:image/jpeg;base64,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"
          title="Shopping Cart React Redux"
          subTitle="A responsive shopping cart built with React and Redux for efficient state management. Users can add, remove, and update items in real-time, with Redux ensuring smooth data flow and scalability"
          githubLink="https://github.com/hishamrehab/Shopping-Cart-"
          liveDemo="https://shopping-cart-seven-lake.vercel.app/"
        />

        <Card
          imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAjpu1b0gjUs30NN1K2145aS9PtaR_SeiHng&s"
          title="Education Website Using UseContext and UseReducer Hooks"
          subTitle="A shopping cart built with React Hooks for efficient state management. It offers real-time updates, item adjustments, and total calculation, ensuring seamless interaction and responsiveness for e-commerce platforms."
          githubLink="https://github.com/hishamrehab/Shopping-Cart_Reducer-and-Context"
          liveDemo="https://shopping-cart-reducer-and-context.vercel.app/"
        />


      </section>
    </main>
  );
};

export default Main;
