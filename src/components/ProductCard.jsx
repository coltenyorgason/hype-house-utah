import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard (props) {
  return (
    <Card style={{ width: '18rem' }} className='mx-auto'>
      <Card.Img variant="top" src={props.img}/>
      <Card.Body>
        <Card.Title>Description</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button variant="primary">Book Now</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;