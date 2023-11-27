import axios from "axios";
import { useState, useEffect } from "react";
import BookingCard from "../components/BookingCard";

export default function AdminPage() {
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
    axios
      .get("http://localhost:5172/allBookings")
      .then((response) => {
        setBookings(response.data);
      })
      .catch((error) => console.error("error fetching data:", error));
  }, []);
  

    return (
<div>
      {bookings.map((eachBooking) => (
        <BookingCard
            booking={eachBooking}
        //   rate={eachBooking.order_price}
        //   time={eachBooking.scheduledDate}
        //   bouncehouse={eachBooking.bouncehouse_id}
        //   customer={eachBooking.customer_id}
        />
      ))}
    </div>
    )
}