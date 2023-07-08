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
    <Preloader />
      <ParallaxProvider>
        <div className="landingpage">
          <section className="lpsec">
            {/* <Parallax translateX={["0px", "-200px"]}> */}
            <div className="lpbox">
              <Parallax speed={1} translateX={["0px", "-200px"]}>
                <h2 className="lph2" data-jarallax-element="0 -200">
                  Awesome cjsalkdf;amf kbkjlh.
                </h2>
              </Parallax>
              <div className="lpcontainer">
                {/* <Parallax speed={-10} y={[-40, 40]} tagouter='div'> */}
                <div className="lpimg ">
                  <img
                    className="jarallax-img"
                    src="https://images.unsplash.com/photo-1646960706799-d178b8c5604f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                    alt=""
                  />
                </div>
                {/* </Parallax> */}
                <Parallax
                  speed={-1}
                  translateY={["50px", "-80px"]}
                  className="lpcontent"
                >
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum iste voluptates perferendis totam odio eius, ipsa
                    deserunt iusto voluptatibus ex alias. Reiciendis,
                    repudiandae maiores. Tempora nisi ea dolore nemo aut tenetur
                    molestias doloribus, quo odio dolores qui quae ipsam
                    consectetur corrupti? Velit illum odit at, voluptates
                    deleniti iusto aliquam debitis sunt magni tempore porro
                    corrupti laudantium, ut similique perferendis!
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
                  Awesome cjsalkdf;amf kbkjlh.
                </h2>
              </Parallax>
              <div className="lpcontainer">
                {/* <Parallax speed={-10} y={[-40, 40]} tagouter='div'> */}
                <div className="lpimg ">
                  <img
                    className="jarallax-img"
                    src="https://images.unsplash.com/photo-1646960706799-d178b8c5604f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                    alt=""
                  />
                </div>
                {/* </Parallax> */}
                <Parallax
                  speed={-1}
                  translateY={["50px", "-80px"]}
                  className="lpcontent"
                >
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum iste voluptates perferendis totam odio eius, ipsa
                    deserunt iusto voluptatibus ex alias. Reiciendis,
                    repudiandae maiores. Tempora nisi ea dolore nemo aut tenetur
                    molestias doloribus, quo odio dolores qui quae ipsam
                    consectetur corrupti? Velit illum odit at, voluptates
                    deleniti iusto aliquam debitis sunt magni tempore porro
                    corrupti laudantium, ut similique perferendis!
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
                  Awesome cjsalkdf;amf kbkjlh.
                </h2>
              </Parallax>
              <div className="lpcontainer">
                {/* <Parallax speed={-10} y={[-40, 40]} tagouter='div'> */}
                <div className="lpimg ">
                  <img
                    className="jarallax-img"
                    src="https://images.unsplash.com/photo-1646960706799-d178b8c5604f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                    alt=""
                  />
                </div>
                {/* </Parallax> */}
                <Parallax
                  speed={-1}
                  translateY={["50px", "-80px"]}
                  className="lpcontent"
                >
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum iste voluptates perferendis totam odio eius, ipsa
                    deserunt iusto voluptatibus ex alias. Reiciendis,
                    repudiandae maiores. Tempora nisi ea dolore nemo aut tenetur
                    molestias doloribus, quo odio dolores qui quae ipsam
                    consectetur corrupti? Velit illum odit at, voluptates
                    deleniti iusto aliquam debitis sunt magni tempore porro
                    corrupti laudantium, ut similique perferendis!
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
                  Awesome cjsalkdf;amf kbkjlh.
                </h2>
              </Parallax>
              <div className="lpcontainer">
                {/* <Parallax speed={-10} y={[-40, 40]} tagouter='div'> */}
                <div className="lpimg ">
                  <img
                    className="jarallax-img"
                    src="https://images.unsplash.com/photo-1646960706799-d178b8c5604f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                    alt=""
                  />
                </div>
                {/* </Parallax> */}
                <Parallax
                  speed={-1}
                  translateY={["50px", "-80px"]}
                  className="lpcontent"
                >
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum iste voluptates perferendis totam odio eius, ipsa
                    deserunt iusto voluptatibus ex alias. Reiciendis,
                    repudiandae maiores. Tempora nisi ea dolore nemo aut tenetur
                    molestias doloribus, quo odio dolores qui quae ipsam
                    consectetur corrupti? Velit illum odit at, voluptates
                    deleniti iusto aliquam debitis sunt magni tempore porro
                    corrupti laudantium, ut similique perferendis!
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
                  Awesome cjsalkdf;amf kbkjlh.
                </h2>
              </Parallax>
              <div className="lpcontainer">
                {/* <Parallax speed={-10} y={[-40, 40]} tagouter='div'> */}
                <div className="lpimg ">
                  <img
                    className="jarallax-img"
                    src="https://images.unsplash.com/photo-1646960706799-d178b8c5604f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                    alt=""
                  />
                </div>
                {/* </Parallax> */}
                <Parallax
                  speed={-1}
                  translateY={["50px", "-80px"]}
                  className="lpcontent"
                >
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum iste voluptates perferendis totam odio eius, ipsa
                    deserunt iusto voluptatibus ex alias. Reiciendis,
                    repudiandae maiores. Tempora nisi ea dolore nemo aut tenetur
                    molestias doloribus, quo odio dolores qui quae ipsam
                    consectetur corrupti? Velit illum odit at, voluptates
                    deleniti iusto aliquam debitis sunt magni tempore porro
                    corrupti laudantium, ut similique perferendis!
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
