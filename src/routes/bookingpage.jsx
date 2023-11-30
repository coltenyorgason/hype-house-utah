import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { Dropdown, DropdownButton } from "react-bootstrap";

export default function BookingPage() {
  const { id } = useParams();
  const [date, setDate] = useState(new Date());
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pickUp, setPickUp] = useState("");
  const [dropOff, setDropOff] = useState("");
  const [bounceHouseData, setBounceHouseData] = useState("");
  const [price, setPrice] = useState("Pick Your Rate");

  useEffect(() => {
    axios
      .get(`http://localhost:5172/bounceHouse/${id}`)
      .then((response) => {
        setBounceHouseData(response.data);
      })
      .catch((error) => console.error("error fetching data:", error));
  }, []);
  console.log("bouncehouse id", id);
  function HandleSubmit(e) {
    axios.post(`http://localhost:5172/booking/create`, {
      name: name,
      email: email,
      phone: phone,
      date: date,
      pickupTime: pickUp,
      dropOffTime: dropOff,
      orderPrice: price,
      bounceHouseId: id,
    });
  }
  return (
    <div >
      <Form onSubmit={HandleSubmit} className="d-flex flex-column" style={{ maxWidth: "75vw", margin: "auto", paddingTop: "1rem" }}>
        <div className="mb-3">
          <DropdownButton title={price} onSelect={(e) => setPrice(parseInt(e))}>
            <Dropdown.Item eventKey={bounceHouseData.price_3hr}>
              ${bounceHouseData.price_3hr} For 3 Hours
            </Dropdown.Item>
            <Dropdown.Item eventKey={bounceHouseData.price_6hr}>
              ${bounceHouseData.price_6hr} For 6 Hours
            </Dropdown.Item>
          </DropdownButton>
        </div>
        <div className="mx-auto">
          <Calendar onChange={setDate} value={date} />
        </div>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            type="textarea"
            name="customerName"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            type="email"
            name="customerEmail"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            value={phone}
            type="tel"
            name="customerPhone"
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-25">
          Submit
        </Button>
      </Form>
    </div>
  );
}
