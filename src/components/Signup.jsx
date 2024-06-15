import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import "./Auth.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <Container className="auth-container">
      <h2 className="text-center mb-4">Signup</h2>
      <Form className="auth-form">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100 mt-3">
          Sign up
        </Button>
      </Form>
      <p className="pt-3">
        already have an account?{" "}
        <Link to={"/login"} className="text-decoration-underline">
          login here
        </Link>
      </p>
    </Container>
  );
};

export default Signup;
