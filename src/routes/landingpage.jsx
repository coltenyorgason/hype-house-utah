import { useState, useEffect } from "react";
import axios from "axios";

export default function LandingPage() {
  const [bounceHouseDataState, setBounceHouseData] = useState(
    []
  );
  useEffect(() => {
    axios
      .get("http://localhost:5172/allBounceHouses")
      .then((response) => {
        setBounceHouseData(response.data);
      })
      .catch((error) => console.error("error fetching data:", error));
  },[]);
  console.log(bounceHouseDataState)
  return (
    <div>
      <ul>
        {bounceHouseDataState.map((bounceHouse) => (
          <li key={bounceHouse.id}>
            <p>{bounceHouse.description}</p>
          </li>
        ))}
      </ul>
      landingpage
    </div>
  );
}


