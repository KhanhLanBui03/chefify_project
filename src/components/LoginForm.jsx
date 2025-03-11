import React from "react";
import { Modal, Button, Form, Container, Col } from "react-bootstrap";

function LoginForm({ show, onClose }) {
  return (
    <Modal show={show} onHide={onClose} centered size="lg">
      <Modal.Header closeButton></Modal.Header>  

      <Modal.Body className="pb-3 p-1">
        <Container fluid className="d-flex">
          
          <Col
            md={6}
            className="d-none d-md-flex align-items-center justify-content-center position-relative"
            style={{ 
              backgroundImage: 'url(/login.jpg)', 
              backgroundSize: "cover",  
              backgroundPosition: "center", 
              backgroundRepeat: "no-repeat",
              minHeight: "10rem",
              borderRadius: "1rem"
            }}
          >
          </Col>
          <Col md={6} className="ps-3 d-flex flex-column justify-content-center">
            <h2 className="fw-bold mb-3 text-center">Login</h2>
            <Form>
            <p className="">Enter your email.</p>
              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Button className="w-100 mb-3" variant="danger">Continue</Button>
            </Form>
            <hr />
            <p className="text-center small">
              By continuing, you agree to the updated <a href="#">Terms of Sale</a>, <a href="#">Terms of Service</a>, and <a href="#">Privacy Policy</a>.
            </p>

            <Button className="w-100 mb-2" variant="light"
            onClick={() => window.open("https://accounts.google.com/signin", "_blank")}>
                <i className="fab fa-google text-danger me-2"></i> Continue with Google
            </Button>
            <Button className="w-100 mb-2" variant="light"
            onClick={() => window.open("https://www.facebook.com/login", "_blank")}>
                <i className="fab fa-facebook text-primary me-2"></i> Continue with Facebook
            </Button>
            <Button className="w-100 mb-2" variant="light"
            onClick={() => window.open("https://appleid.apple.com/auth/authorize", "_blank")}>
                <i className="fab fa-apple text-dark me-2"></i> Continue with Apple
            </Button>

          </Col>
        </Container>
      </Modal.Body>
      
    </Modal>
  );
}

export default LoginForm;
