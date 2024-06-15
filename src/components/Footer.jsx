import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3  bg-dark text-white">
      <Container>
        <Row className="pt-3">
          <Col md={4} className="footer-section">
            <h5>Contact Us</h5>
            <p>Email: contact@sportsmanagement.com</p>
            <p>Phone: +123 456 7890</p>
          </Col>
          <Col md={4} className="footer-section">
            <h5>Follow Us</h5>
            <a href="#" className="footer-link">
              Facebook
            </a>
            <br />
            <a href="#" className="footer-link">
              Twitter
            </a>
            <br />
            <a href="#" className="footer-link">
              Instagram
            </a>
          </Col>
          <Col md={4} className="footer-section">
            <h5>Quick Links</h5>
            <a href="#" className="footer-link">
              Home
            </a>
            <br />
            <a href="#" className="footer-link">
              Match Fixtures
            </a>
            <br />
            <a href="#" className="footer-link">
              Team List
            </a>
            <br />
            <a href="#" className="footer-link">
              Login
            </a>
            <br />
            <a href="#" className="footer-link">
              Signup
            </a>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <span>
              &copy; {new Date().getFullYear()} Sports Management. All rights
              reserved.
            </span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
