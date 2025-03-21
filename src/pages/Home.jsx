import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const recipesData = {
    summerRecipes: [
      { id: 1, title: "Cake", image: "/fooddetail.jpg" },
      { id: 2, title: "Spaghetti", image: "/food4.jpg" },
      { id: 3, title: "Lettuce Delight", image: "/food2.jpg" },
      { id: 4, title: "Snack Cakes", image: "/food3.jpg" },
    ],
    videoRecipes: [
      { id: 5, title: "Omelette", image: "/Omelette.jpg" },
      { id: 6, title: "Rice Balls", image: "/RiceBall.jpg" },
      { id: 7, title: "Savory Soup", image: "/SavorySoup.jpg" },
      { id: 8, title: "Delight Salad", image: "/DelightSalad.jpg" },
    ],
    editorsPick: [
      { id: 9, title: "Stuffed Sticky Rice Ball", author: "John Doe", image: "/StuffedStickyRiceBall.jpg" },
      { id: 10, title: "Strawberry Smoothie", author: "Jane Smith", image: "/Strawberry Smoothie.jpg" },
      { id: 11, title: "Latte Art", author: "Liam Brown", image: "/Latte Art.jpg" },
      { id: 12, title: "Butter Fried Noodles", author: "Emma Green", image: "/Butter Fried Noodles.jpg" },
    ],
  };

  return (
    <div>
      {/* 🏠 Banner Section */}
      <div
        style={{
          backgroundImage: "url('/home.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        
      </div>

      {/* 🍽 This Summer Recipes */}
      <Container className="py-5">
        <h2 className="text-center text-danger mb-4">This Summer Recipes</h2>
        <Row className="g-4">
          {recipesData.summerRecipes.map((recipe) => (
            <Col key={recipe.id} md={3}>
              <Card className="shadow hover-shadow">
                <Card.Img variant="top" src={recipe.image} />
                <Card.Body className="text-center">
                  <Card.Title>{recipe.title}</Card.Title>
                  <Button variant="outline-danger" onClick={() => navigate(`/recipe/${recipe.id}`)}>View</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* 🎥 Recipes With Videos */}
      <Container className="py-5 bg-light">
        <h2 className="text-center text-danger mb-4">Recipes With Videos</h2>
        <Row className="g-4">
          {recipesData.videoRecipes.map((recipe) => (
            <Col key={recipe.id} md={3}>
              <Card className="shadow hover-shadow">
                <Card.Img  className="img-fluid" variant="top" src={recipe.image} style={{ width: "17rem", height: "10rem", objectFit: "cover" }} />
                <Card.Body className="text-center">
                  <Card.Title>{recipe.title}</Card.Title>
                  <Button variant="outline-danger" onClick={() => navigate(`/recipe/${recipe.id}`)}>Watch</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* 🌟 Editor's Pick */}
      <Container className="py-5">
        <h2 className="text-center text-danger mb-4">Editor's Pick</h2>
        <Row className="g-4">
          {recipesData.editorsPick.map((recipe) => (
            <Col key={recipe.id} md={6}>
              <Card className="shadow d-flex flex-row hover-shadow">
                <Card.Img  className="img-fluid" variant="left" src={recipe.image} style={{ width: "15rem", height: "10rem", objectFit: "cover" }} />
                <Card.Body>
                  <Card.Title>{recipe.title}</Card.Title>
                  <Card.Text className="text-muted">by {recipe.author}</Card.Text>
                  <Button variant="outline-danger" onClick={() => navigate(`/recipe/${recipe.id}`)}>View</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
