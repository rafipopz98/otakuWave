import React from "react";
import "./Landingpage.css";
import "./pcss2.css";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import AnotherLanding from "./AnotherLanding";
import { NavLink } from "react-router-dom";
import Preloader from "../Preloader/Preloader";

const Landingpage = () => {
  return (
    <>
    {/* <Preloader /> */}
      <ParallaxProvider>
        <h1 className="midanime">Immerse Yourself in the Enchanting World of Anime: Unlimited Adventures Await!</h1>
        <div className="landingpage">
          <section className="lpsec">
            {/* <Parallax translateX={["0px", "-200px"]}> */}
            <div className="lpbox">
              <Parallax speed={1} translateX={["0px", "-200px"]}>
                <h2 className="lph2" data-jarallax-element="0 -200">
                Explore a Vast Library of Anime
                </h2>
              </Parallax>
              <div className="lpcontainer">
                {/* <Parallax speed={-10} y={[-40, 40]} tagouter='div'> */}
                <Parallax speed={-2} translateX={["0px", "-200px"]} className="lpimg">
                  <img
                    className="jarallax-img"
                    src="https://i.blogs.es/06ecba/animes_crunchyroll/1366_2000.jpeg"
                    alt=""
                  />
                </Parallax>
                {/* </Parallax> */}
                <Parallax
                  speed={5}
                  translateX={["50px", "-80px"]}
                  className="lpcontent"
                >
                  <p>
                  Our anime streaming website offers a vast library of captivating titles from various genres, including action, romance, fantasy, comedy, and more. Dive into a world of endless entertainment as you discover new and beloved anime series and movies. From popular classics to the latest releases, we have something for every anime enthusiast.
                  </p>
                </Parallax>
              </div>
            </div>
          </section>
          <section className="lpsec">
            {/* <Parallax translateX={["0px", "-200px"]}> */}
            <div className="lpbox">
              <Parallax speed={-2} translateX={["-200px", "-0px"]}>
                <h2 className="lph2" data-jarallax-element="0 -200">
                High-Quality Streaming Experience
                </h2>
              </Parallax>
              <div className="lpcontainer">
                {/* <Parallax speed={-10} y={[-40, 40]} tagouter='div'> */}
                <Parallax speed={-2} translateX={["-200px", "-0px"]}div className="lpimg">
                  <img
                    className="jarallax-img"
                    src="https://im.ziffdavisinternational.com/ign_ap/screenshot/t/top-10-anime-2014-series-to-watch/top-10-anime-2014-series-to-watch_q73v.jpg"
                    alt=""
                  />
                </Parallax>
                {/* </Parallax> */}
                <Parallax
                  speed={5}
                  translateX={["-80px", "50px"]}
                  className="lpcontent"
                >
                  <p>
                  Experience anime like never before with our high-quality streaming service. Enjoy crisp visuals, smooth playback, and immersive audio that bring your favorite anime to life. Whether you're streaming on your computer, tablet, or mobile device, our platform ensures a seamless and enjoyable viewing experience, allowing you to get lost in the captivating worlds of anime.
                  </p>
                </Parallax>
              </div>
            </div>
          </section>
          <section className="lpsec">
            {/* <Parallax translateX={["0px", "-200px"]}> */}
            <div className="lpbox">
              <Parallax speed={-2} translateX={["0px", "-200px"]}>
                <h2 className="lph2" data-jarallax-element="0 -200">
                Stay Up to Date with the Latest Episodes
                </h2>
              </Parallax>
              <div className="lpcontainer">
                {/* <Parallax speed={-10} y={[-40, 40]} tagouter='div'> */}
                <Parallax speed={-2} translateX={["0px", "-200px"]} className="lpimg ">
                  <img
                    className="jarallax-img"
                    src="https://cdn.mos.cms.futurecdn.net/RypcWzkMX4Q4ue8RTzC7oi-1200-80.png"
                    alt=""
                  />
                </Parallax>
                {/* </Parallax> */}
                <Parallax
                  speed={5}
                  translateY={["50px", "-80px"]}
                  className="lpcontent"
                >
                  <p>
                  Don't miss a single episode of your favorite anime series. Our streaming platform keeps you up to date with the latest releases, so you can stay in the loop and be part of the ongoing anime conversations. Whether it's a highly anticipated new season or weekly episodes, we've got you covered, ensuring you never fall behind on the thrilling narratives and character developments.
                  </p>
                </Parallax>
              </div>
            </div>
          </section>
          <section className="lpsec">
            {/* <Parallax translateX={["0px", "-200px"]}> */}
            <div className="lpbox">
              <Parallax speed={-2} translateX={["-200px", "-0px"]}>
                <h2 className="lph2" data-jarallax-element="0 -200">
                Create Personalized Watchlists
                </h2>
              </Parallax>
              <div className="lpcontainer">
                {/* <Parallax speed={-10} y={[-40, 40]} tagouter='div'> */}
                <Parallax speed={-2} translateX={["-200px", "-0px"]} className="lpimg ">
                  <img
                    className="jarallax-img"
                    src="https://imgix.ranker.com/list_img_v2/18997/538997/original/best-anime-series-all-time-u4?fit=crop&fm=pjpg&q=60&dpr=2&w=1200&h=720"
                    alt=""
                  />
                </Parallax>
                {/* </Parallax> */}
                <Parallax
                  speed={5}
                  translateX={["-80px", "50px"]}
                  className="lpcontent"
                >
                  <p>
                    Take control of your anime streaming experience by creating personalized watchlists. With our user-friendly interface, you can easily bookmark and organize your favorite anime titles, making it convenient to pick up where you left off and discover new series based on your interests. Build a collection of must-watch anime and curate your own personalized anime journey.
                  </p>
                </Parallax>
              </div>
            </div>
          </section>
          <section className="lpsec">
            {/* <Parallax translateX={["0px", "-200px"]}> */}
            <div className="lpbox">
              <Parallax speed={1} translateX={["0px", "-200px"]}>
                <h2 className="lph2" data-jarallax-element="0 -200">
                Dive into Captivating Storylines
                </h2>
              </Parallax>
              <div className="lpcontainer">
                {/* <Parallax speed={-10} y={[-40, 40]} tagouter='div'> */}
                <Parallax speed={-2} translateX={["0px", "-200px"]} className="lpimg ">
                  <img
                    className="jarallax-img"
                    src="https://cdn.technadu.com/wp-content/uploads/2021/07/Psycho-Pass.jpg"
                    alt=""
                  />
                </Parallax>
                {/* </Parallax> */}
                <Parallax
                  speed={5}
                  translateX={["-200px", "-200px"]}
                  className="lpcontent"
                >
                  <p>
                  Experience captivating storylines that will keep you hooked from the first episode to the last. Our anime streaming website brings you a diverse range of narratives filled with thrilling plot twists, emotional character arcs, and thought-provoking themes. Immerse yourself in the compelling stories that anime has to offer and embark on unforgettable journeys alongside your favorite characters.
                  </p>
                </Parallax>
              </div>
            </div>
          </section>
          {/* <AnotherLanding /> */}
          <div className="finishis">
            <div className="btnfinish">
            <NavLink to={'/signup'}>

              <button>SignUP</button>
            </NavLink>
<NavLink to={'/login'}>
              <button>Login</button>

</NavLink>
            </div>
          </div>
        </div>
      </ParallaxProvider>
    </>
  );
};

export default Landingpage;

