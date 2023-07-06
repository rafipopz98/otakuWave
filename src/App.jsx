import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/SignUp/Signup";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Slider from "./components/Slider/Slider";
import Popular from "./components/Popular/Popular";
import Home from "./pages/Home";
// import SmoothScrollbar from "smooth-scrollbar";
// import ScrollToTop from './components/Scroll/ScrollToTop'
function App() {
  return (
    <>
      {/* <ScrollToTop/> */}
      {/* <SmoothScrollBar /> */}
      <Router>
        {/* <Navbar /> */}
        {/* <Slider /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
