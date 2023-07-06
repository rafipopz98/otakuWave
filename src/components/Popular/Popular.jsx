import "./Popular.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { productData, responsive } from "./PopularAnimeList.js";
import PopularAnimeProduct from "./PopularAnimeProduct.jsx";

export default function App() {
  const product = productData.map((item) => (
    <PopularAnimeProduct
      name={item.name}
      url={item.imageurl}
      price={item.price}
      status={item.status}
    />
  ));

  return (
    <div className="App">
      <h1 className="popu">Popular Anime</h1>
      <Carousel responsive={responsive}>{product}</Carousel>
    </div>
  );
}
