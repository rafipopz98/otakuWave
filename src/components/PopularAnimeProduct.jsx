import React from "react";

export default function PopularAnimeProduct(props) {
  return (
    <div className="card">
      <img className="product--image" src={props.url} alt="product image" />
      <div className="sliderdetails">
        <h2>{props.name}</h2>
        <p>{props.status}</p>
      </div>
          <button>Watch Now</button>
    </div>
  );
}
