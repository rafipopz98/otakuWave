import "./Login.css";
import { Link } from "react-router-dom";
import Preloader from "../Preloader/Preloader";
const Login = () => {
  return (
    <>
      {/* <Preloader /> */}
      <div className="loginpage">
        <div className="logincontainer">
          <div className="loginedetails">
            <div className="header">
              <h2>Login In to your account</h2>
            </div>
            <form action="">
              <div className="form">
                <input type="text" placeholder="Enter your username" />
              </div>
              <div className="form">
                <input type="password" placeholder="Enter your password" />
                <br />
                <p className="textforget"> &nbsp;&nbsp;Forgot Password?</p>
              </div>
              <div className="form">
                <Link to={"/"}>
                  <input
                    className="submitt"
                    type="submit"
                    value="login in to your account"
                  />
                </Link>
              </div>
            </form>
            Don't have any account yet?
            <a href="/signup" to={"/signup"} className="loginbtn">
              Signup
            </a>
          </div>
          <div className="loginimage"></div>
        </div>
        <div className="title">
          <h1>otakuWave</h1>
          <p>
            <span className="dot">·</span>Unleash your anime obsession with
            OtakuWave:
            <br />
            &nbsp; The ultimate destination for immersive streaming,featuring
            &nbsp;&nbsp;a vast collection of captivating shows and movies.
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
