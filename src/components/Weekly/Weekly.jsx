import "../Popular/Popular.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { popularData, responsive } from "../Popular/PopularAnimeList";
import PopularAnimeProduct from "../Popular/PopularAnimeProduct";
import WeeklyProp from "./WeeklyProp";

export default function App() {
  const product = popularData.map((item) => (
    <WeeklyProp
    name={item.name} 
    url={item.imageurl}
    price={item.price}
    status={item.status}
  />
  ));

  return (
    <div className="popularmaincontainer">
      <h1 className="popu">Weekly Uploads</h1>
      <Carousel responsive={responsive}>{product}</Carousel>
    </div>
  );
}
