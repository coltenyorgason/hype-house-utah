import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";
import { useState, useEffect } from "react";

export default function BookingCard({ booking }) {
  const [orderPrice, setOrderPrice] = useState(booking.order_price);
  const [bounceHouse, setBounceHouse] = useState({
    description: "",
    id: 0,
    price_3hr: 0,
    price_6hr: 0,
    product_img: "",
  });
  useEffect(() => {
    axios
      .get(`http://localhost:5172/bounceHouse/${booking.bouncehouse_id}`)
      .then((response) => {
        setBounceHouse(response.data);
      })
      .catch((error) => console.error("error fetching data:", error));
  }, []);
  function handleDelete() {
    axios.delete(`http://localhost:5172/booking/${booking.id}`);
  }
  function handleUpdate() {
    axios.put(`http://localhost:5172/updateBooking/${booking.id}`, {
      orderPrice: orderPrice,
    });
  }
  return (
    <Card
      style={{ width: "18rem" }}
      className="mx-auto"
      key={booking.customer_id}
    >
      <Card.Body>
        <Card.Title>{booking.customer_id}</Card.Title>
        <Card.Text>
          <DropdownButton
            title={orderPrice}
            onSelect={(e) => setOrderPrice(parseInt(e))}
          >
            <Dropdown.Item eventKey={bounceHouse.price_3hr}>
              Three Hour {bounceHouse.price_3hr}
            </Dropdown.Item>
            <Dropdown.Item eventKey={bounceHouse.price_6hr}>
              Six Hour {bounceHouse.price_6hr}
            </Dropdown.Item>
          </DropdownButton>
          <p>{booking.scheduledDate}</p>
          <p>{booking.bouncehouse_id}</p>
        </Card.Text>
        <Button onClick={handleUpdate}>Update</Button>
        <Button onClick={handleDelete}>Delete</Button>
      </Card.Body>
    </Card>
  );
}
