import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <Container className="contact-us-section">
      <h2 className="contact-us-heading">Contact Us</h2>
      <Row className="justify-content-center">
        <Col className="">
          <div className="auth-container p-4">
            <Form className="auth-form">
              <Row className="">
                <Col md={6}>
                  <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <Form.Group controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Enter your message"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  <Button variant="primary" type="submit" className="w-100">
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
