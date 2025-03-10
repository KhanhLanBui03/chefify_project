import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Contact() {
  // Trạng thái Modal
  const [show, setShow] = useState(false);
  // Trạng thái Form Input
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  // Trạng thái lỗi
  const [errors, setErrors] = useState({});

  // Xử lý thay đổi input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // Xóa lỗi khi người dùng nhập lại
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // Xử lý khi bấm "Send Message"
  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    // Kiểm tra các trường input
    if (!formData.name.trim()) newErrors.name = "Please enter your full name.";
    if (!formData.email.trim()) newErrors.email = "Please enter your email.";
    if (!formData.message.trim()) newErrors.message = "Please enter your message.";

    // Nếu có lỗi, cập nhật state và không gửi form
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Nếu không có lỗi, hiển thị modal thành công
    setShow(true);
  };

  // Reset form khi đóng modal
  const handleClose = () => {
    setShow(false);
    setFormData({ name: "", email: "", message: "" }); // Reset form
    setErrors({}); // Xóa lỗi
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center fw-bold mb-4">📩 Contact Us</h2>
      <p className="text-center text-muted">
        Have any questions or feedback? Feel free to reach out to us!
      </p>

      <Row className="mt-4">
        {/* Contact Info */}
        <Col md={5} className="d-flex flex-column gap-3">
          <Card className="shadow-sm p-3 border-0">
            <Card.Body className="d-flex align-items-center">
              <i className="bi bi-geo-alt text-danger fs-3 me-3"></i>
              <div>
                <h5 className="mb-0">Address</h5>
                <p className="text-muted mb-0">Thạnh Xuân, Q12</p>
              </div>
            </Card.Body>
          </Card>

          <Card className="shadow-sm p-3 border-0">
            <Card.Body className="d-flex align-items-center">
              <i className="bi bi-telephone text-primary fs-3 me-3"></i>
              <div>
                <h5 className="mb-0">Phone</h5>
                <p className="text-muted mb-0">0357****29</p>
              </div>
            </Card.Body>
          </Card>

          <Card className="shadow-sm p-3 border-0">
            <Card.Body className="d-flex align-items-center">
              <i className="bi bi-envelope text-success fs-3 me-3"></i>
              <div>
                <h5 className="mb-0">Email</h5>
                <p className="text-muted mb-0">support@gmail.com</p>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Contact Form */}
        <Col md={7}>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <h4 className="mb-3">Send us a message</h4>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    isInvalid={!!errors.name} // Hiển thị lỗi
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    isInvalid={!!errors.message}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Button type="submit" variant="danger" className="w-100 rounded-pill shadow-sm">
                  Send Message
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Modal thông báo gửi thành công */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body className="text-center p-4">
          <i className="bi bi-check-circle-fill text-success fs-1"></i>
          <h4 className="mt-3">Message Sent!</h4>
          <p className="text-muted">Chúng tôi đã nhận được tin nhắn của bạn và sẽ sớm liên hệ lại với bạn.</p>
          <Button variant="danger" className="mt-2 px-4" onClick={handleClose}>
            OK
          </Button>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default Contact;
