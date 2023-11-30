import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function ContactUs() {
  return (
    <div style={{ maxWidth: "75vw", margin: "auto", paddingTop: "1rem" }}>
        <h1 style={{ marginBottom: "1rem" }}>Contact Us</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Subject</Form.Label>
          <Form.Control type="textarea" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
