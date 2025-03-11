import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
  return (
    <Container className="mt-5">
      <h2 className="text-center fw-bold mb-4">👨‍🍳 About Us</h2>
      <p className="text-center text-muted">
        Welcome to <span className="fw-bold">Chefify</span> – where we bring the best recipes to your kitchen!
      </p>
      <Row className="mt-4 align-items-center">
        <Col md={6}>
          <Image 
            src="./public/food8.jpg" 
            fluid 
            className="rounded-4 shadow-sm w-75 ms-5"
          />
        </Col>
        <Col md={6}>
          <h3 className="fw-bold">Our Story</h3>
          <p className="text-muted">
            Ở <span className="fw-bold">Chefify</span>, chúng tôi tin rằng việc nấu ăn phải thú vị, dễ dàng và dễ tiếp cận đối với mọi người. Nền tảng của chúng tôi được thiết kế để mang đến cho bạn những công thức nấu ăn ngon nhất được chọn lọc kỹ lưỡng từ các đầu bếp hàng đầu trên thế giới.
          </p>
          <p className="text-muted">
          Cho dù bạn là người mới bắt đầu hay một đầu bếp chuyên nghiệp, bộ sưu tập công thức nấu ăn của chúng tôi sẽ truyền cảm hứng cho bạn để tạo ra những bữa ăn ngon cho chính mình và những người thân yêu.
          </p>
        </Col>
      </Row>

      {/* Features Section */}
      <Row className="mt-5">
        <Col md={4}>
          <Card className="shadow-sm border-0 text-center p-3">
            <Card.Body>
              <i className="bi bi-book fs-1 text-primary"></i>
              <h5 className="fw-bold mt-3">1000+ Recipes</h5>
              <p className="text-muted">Discover a wide variety of dishes from different cuisines.</p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="shadow-sm border-0 text-center p-3">
            <Card.Body>
              <i className="bi bi-clock fs-1 text-success"></i>
              <h5 className="fw-bold mt-3">Quick & Easy</h5>
              <p className="text-muted">Follow simple, step-by-step guides to cook like a pro.</p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="shadow-sm border-0 text-center p-3">
            <Card.Body>
              <i className="bi bi-heart fs-1 text-danger"></i>
              <h5 className="fw-bold mt-3">Made with Love</h5>
              <p className="text-muted">Every recipe is crafted to bring joy to your dining table.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
