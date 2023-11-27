import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import DropdownButton from 'react-bootstrap/DropdownButton'
import axios from "axios";
import { Dropdown } from "bootstrap";
import { useState } from "react";

export default function BookingCard({ booking }) {
    console.log(booking)
  const [orderPrice, setOrderPrice] = useState(booking.order_price);
  function handleDelete() {
    console.log(booking.id);
    axios.delete(`http://localhost:5172/booking/${booking.id}`);
  }
  function handleUpdate() {
    axios.put(`http://localhost:5172/updateBooking`),
      {
        orderPrice: orderPrice,
      };
  }

  return (
    <Card
      style={{ width: "18rem" }}
      className="mx-auto"
      key={booking.customer_id}
    >
      <Card.Body>
        <Card.Title>{booking.customerDetail.name}</Card.Title>
        <Card.Text>
          <DropdownButton>
            <Dropdown.Item eventKey="#/action-1">Three Hour</Dropdown.Item>
            <Dropdown.Item eventKey="#/action-2">Six Hour</Dropdown.Item>
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
