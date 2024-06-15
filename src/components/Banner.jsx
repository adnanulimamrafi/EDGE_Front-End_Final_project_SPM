import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div className="banner-text">
              <h1 className="banner-heading">Elevate Your Game</h1>
              <p className="banner-paragraph">
                Welcome to our Sports Management System, where you can
                seamlessly manage match fixtures, track team performances, and
                stay updated with the latest sports events. Join us to take your
                sports experience to the next level.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <img
              src="https://t3.ftcdn.net/jpg/02/86/76/78/360_F_286767832_VabQWUUNYlChLLBR7XMfxAXrnJUsfLn0.jpg"
              alt="Sports Banner"
              className="img-fluid banner-image"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
