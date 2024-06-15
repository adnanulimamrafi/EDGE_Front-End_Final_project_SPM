import { Container, Row, Col } from "react-bootstrap";
import Banner from "./Banner";
import Gallery from "./Gallery";
import About from "./About";
import ContactUs from "./ContactUs";

const Home = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <Banner />
          <Gallery />
          <About />
          <ContactUs/>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
