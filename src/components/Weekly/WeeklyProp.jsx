import React from "react"; 

export default function WeeklyProp(props) {
  return (
    <div className="card">
    <div className="wrap">
      <img className="product--image" src={props.url} alt="poular-image" />
      <div className="sliderdetails">
        <h2>{props.name}</h2>
        <p>{props.status}</p>
      </div>
          <button>Watch Now</button>
          </div>
    </div>
  );
}




