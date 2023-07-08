import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/SignUp/Signup";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Slider from "./components/Slider/Slider";
import Popular from "./components/Popular/Popular";
import Home from "./pages/Home";
import Preloader from "./components/Preloader/Preloader";
import Top100 from "./components/Top100/Top100";
import Error404 from "./components/ErrorPage/Error404";
import Landingpage from "./components/LandingPage.jsx/Landingpage";
import AnotherLanding from "./components/LandingPage.jsx/AnotherLanding";
// import SmoothScrollbar from "smooth-scrollbar";
// import ScrollToTop from './components/Scroll/ScrollToTop'
function App() {
  return (
    <>
    {/* <Preloader /> */}
      {/* <ScrollToTop/> */}
      {/* <SmoothScrollBar /> */}
      <Router>
        <Navbar />
        {/* <Slider /> */}
        <Routes>
          <Route exact path="/" element={<Landingpage />} />
          <Route exact path="/account" element={<Home />} />

          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/top100" element={<Top100 />} />
          <Route exact path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
