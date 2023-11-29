import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

export default function ProductPage() {
  const [bounceHouseDataState, setBounceHouseData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5172/allBounceHouses")
      .then((response) => {
        setBounceHouseData(response.data);
      })
      .catch((error) => console.error("error fetching data:", error));
  }, []);
  console.log(bounceHouseDataState);
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      {bounceHouseDataState.map((bounceHouse) => (
        <ProductCard
          description={bounceHouse.description}
          img="https://m.media-amazon.com/images/I/8154feawNDL.jpg"
          id={bounceHouse.id}
        />
      ))}
    </div>
  );
}
