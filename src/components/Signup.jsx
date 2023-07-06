import "./Signup.css";

import { Link } from "react-router-dom";
import Preloader from "./Preloader";
const signupPage = () => {
  return (
    <>
<Preloader />
    <div className="signuppage">
      <div className="signupcontainer">
        <div className="signupedetails">
          <div className="header">
            <h2>Sign Up new account</h2>
          </div>
          <form action="">
            <div className="form">
              <input type="text" placeholder="Enter your username" />
            </div>
            <div className="form">
              <input type="email" placeholder="Enter your Email" />
            </div>
            <div className="form">
              <input type="password" placeholder="Enter your password" />
              <br />
              <p className="textpass">password must be more than 8 digits *</p>
            </div>
            <div className="form">
              <input
                className="submitt"
                type="submit"
                value="sign up to new account"
              />
            </div>
          </form>
          Already have account?
          <a to={"/login"} href="/login" className="signupbtn">
            Login
          </a>
        </div>
        <div className="signupimage"></div>
      </div>
      <div className="title">
        <h1>otakuWave</h1>
        <p>
        <span className="dot">·</span>Unleash your anime obsession with OtakuWave: The ultimate destination for immersive streaming, featuring a vast collection of captivating shows and movies.
        </p>
      </div>
    </div>
    </>
  );
};

export default signupPage;
