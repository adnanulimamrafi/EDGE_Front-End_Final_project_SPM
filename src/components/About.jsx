import { Container, Row, Col } from "react-bootstrap";
import "./AboutUs.css";

const About = () => {
  return (
    <div>
      <h2 className="text-center mb-4 about-us-heading">About Us</h2>
      <Container className="about-us-section py-5">
        <Row className="d-flex align-items-center px-3">
          <Col md={5}>
            <p className="about-us-text m-3">
              We are dedicated to providing a seamless and efficient platform
              for managing sports events, tracking team performances, and
              keeping you updated with the latest in the sports world.
            </p>
            <p className="about-us-text m-3">
              Our mission is to enhance the sports experience for athletes,
              coaches, and fans alike by offering comprehensive tools and
              resources. Whether you are organizing a tournament, managing a
              team, or simply looking to stay informed, our platform has
              something for everyone.
            </p>
          </Col>
          <Col md={7}>
            <img
              src="https://i.pinimg.com/originals/ca/f4/13/caf413868cc5f668889fcacb1d96273e.jpg"
              alt="About Us"
              className="img-fluid rounded about-us-image "
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
