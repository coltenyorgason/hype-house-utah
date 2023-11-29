import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard (props) {
  return (
    <Card style={{ width: '18rem' }} className='mx-auto'>
      <Card.Img variant="top" src={props.img}/>
      <Card.Body className='d-flex justify-content-center align-items-center flex-column'>
        <Card.Title>Description</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <a href={`/bookingpage/${props.id}`} className="btn btn-primary"> Book Now </a>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;