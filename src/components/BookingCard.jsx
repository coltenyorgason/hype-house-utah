import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios'

export default function BookingCard ({booking}) {
    function handleDelete() {
    console.log(booking.id)
        axios.delete(`http://localhost:5172/booking/${booking.id}`)
    }
 
    return (
      <Card style={{ width: '18rem' }} className='mx-auto' key={booking.customer_id}>
        <Card.Body>
          <Card.Title>{booking.customer_id}</Card.Title>
          <Card.Text>
            <p>{booking.order_price}</p>
            <p>{booking.scheduledDate}</p>
            <p>{booking.bouncehouse_id}</p>
          </Card.Text>
          <Button onClick={handleDelete}>Delete</Button>
        </Card.Body>
      </Card>
    );
  }
  
  