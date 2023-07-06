import React from "react";
import "./Slider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const img1 =
  "https://i.pinimg.com/originals/e0/4f/b5/e04fb53e97ff1656bc0ddb9e50b139a6.jpg";
const img2 =
  "https://w0.peakpx.com/wallpaper/333/586/HD-wallpaper-demon-slayer-kimetsu-no-yaiba-banner.jpg";
const img3 = "https://i.redd.it/nasqgycd7q681.jpg";
const img4 =
  "https://i.pinimg.com/originals/d1/00/92/d1009254c0370706696faad1800154aa.jpg";

const AnimeSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="container">
      <Slider className="slider" {...settings}>
        <div className="wrap">
          <img src={img1} alt="" />
          <div className="textslide">
            <h1>title</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
              vitae ab. Illo, odio.
            </p>
            <button>Watch NOW</button>
          </div>
        </div>
        <div className="wrap">
          <img src={img3} alt="" />
          <div className="textslide">
            <h1>title</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
              vitae ab. Illo, odio.
            </p>
            <button>Watch NOW</button>
          </div>
        </div>
        <div className="wrap">
          <img src={img2} alt="" />
          <div className="textslide">
            <h1>title</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
              vitae ab. Illo, odio.
            </p>
            <button>Watch NOW</button>
          </div>
        </div>
        <div className="wrap">
          <img src={img4} alt="" />
          <div className="textslide">
            <h1>title</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
              vitae ab. Illo, odio.
            </p>
          
              <button>Watch NOW</button>
              <button>Watch List</button>
           
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default AnimeSlider;
