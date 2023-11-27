import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

export default function BookingPage() {
  const { id } = useParams();
  const [date, setDate] = useState(new Date());
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pickUp, setPickUp] = useState("");
  const [dropOff, setDropOff] = useState("");
  const [bounceHouseData, setBounceHouseData] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5172/bounceHouse/${id}`)
      .then((response) => {
        setBounceHouseData(response.data);
      })
      .catch((error) => console.error("error fetching data:", error));
  }, []);
  function HandleSubmit(e) {
    axios.post(`http://localhost:5172/booking/create`, {
      name: name,
      email: email,
      phone: phone,
      date: date,
      pickupTime: pickUp,
      dropOffTime: dropOff,
      orderPrice: "threeHour",
      bounceHouse_id: id
    });
  }
  return (
    <Form onSubmit={HandleSubmit}>
      <div className="mb-3">
        <Form.Label>Time Length and Price</Form.Label>
        <Form.Check
          type="radio"
          label={`$${bounceHouseData.price_3hr} For 3 Hours`}
          id="3 Hour"
          name="threeHour"
        />
        <Form.Check
          type="radio"
          label={`$${bounceHouseData.price_6hr} For 6 Hours`}
          id="6 Hour"
          name="sixHour"
        />
      </div>
      <Calendar onChange={setDate} value={date} />
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
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
