import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Button, Form, Image } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToFavorites } from "../redux/favoritesSlice";

function RecipeDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [comments, setComments] = useState([
    { name: "Jimmy Will", text: "Great recipe!", time: "08:10 AM" },
    { name: "Alisa Grill", text: "Tried it today, absolutely delicious!", time: "09:15 AM" }
  ]);
  const [newComment, setNewComment] = useState("");

  // Danh sách công thức mẫu
  const recipeDetails = {
    "1": {
      id: "1",
      title: "Pasta Primavera",
      description: "A delicious Italian dish with fresh ingredients and rich flavors.",
      image: "/fooddetail.jpg",
      author: "Emma Gonzalez",
      time: "45 minutes",
      rating: "4.8",
      communityVotes: "302",
      ingredients: [
        "250g pasta",
        "2 cups cherry tomatoes",
        "3 cloves garlic, minced",
        "1/4 cup olive oil",
        "1 tsp salt",
        "1/2 tsp black pepper",
        "Fresh basil leaves",
        "Parmesan cheese"
      ],
      steps: [
        { text: "Boil water and cook the pasta according to the package instructions.", image: "/step1.jpg" },
        { text: "Heat olive oil in a pan, add minced garlic and sauté until fragrant.", image: "/step2.jpg" },
        { text: "Add cherry tomatoes and cook until they soften." },
        { text: "Mix the cooked pasta with the sauce, season with salt and pepper." },
        { text: "Serve hot with fresh basil and Parmesan cheese." },
        { text: "Enjoy your meal!", image: "/step6.jpg" }
      ]
    }
  };

  // Lấy công thức theo ID
  const recipe = recipeDetails[id] || null;

  if (!recipe) {
    return (
      <Container className="py-5 text-center">
        <h3 className="text-danger">Recipe Not Found!</h3>
      </Container>
    );
  }


  // Gửi bình luận
  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      setComments([...comments, { name: "You", text: newComment, time: "Just now" }]);
      setNewComment("");
    }
  };

  return (
    <Container className="py-5">
      {/* Recipe Header */}
      <Row className="mb-4">
        <Col md={8}>
          <h1 className="text-danger">{recipe.title}</h1>
          <p className="text-muted">{recipe.description}</p>
          <div className="d-flex align-items-center gap-3">
            <span className="fw-bold">👩‍🍳 {recipe.author}</span>
            <span>⏳ {recipe.time}</span>
            <span>⭐ {recipe.rating} ({recipe.communityVotes} votes)</span>
          </div>
        </Col>
        <Col md={4}>
          <Card className="shadow">
            <Card.Img variant="top" src={recipe.image} onError={(e) => e.target.src = "/placeholder.jpg"} />
          </Card>
        </Col>
      </Row>

      {/* Ingredients & Add to Favorites */}
      <Row>
        <Col md={4}>
          <Card className="p-3 shadow">
            <h4 className="text-danger">Ingredients</h4>
            <ul>
              {recipe.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <Button
                variant="danger"
                onClick={() => dispatch(addToFavorites({ id, title: recipe.title, image: recipe.image }))}>
                + Add to My Recipe List
            </Button>

          </Card>
        </Col>

        {/* Cooking Steps */}
        <Col md={8}>
          <h4 className="text-danger">Cooking Steps</h4>
          {recipe.steps.map((step, index) => (
            <Card key={index} className="mb-3 shadow">
              <Row className="g-0">
                {step.image && (
                  <Col md={4}>
                    <Card.Img src={step.image} onError={(e) => e.target.src = "/placeholder.jpg"} className="h-100 object-fit-cover" />
                  </Col>
                )}
                <Col md={step.image ? 8 : 12} className="p-3">
                  <Card.Text><strong>Step {index + 1}:</strong> {step.text}</Card.Text>
                </Col>
              </Row>
            </Card>
          ))}
        </Col>
      </Row>

      {/* Cooking Note */}
      <Row className="mt-5">
        <Col md={12}>
          <h4 className="text-danger">Cooking Note</h4>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Share your thoughts about the recipe..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
            </Form.Group>
            <Button variant="danger" onClick={handleCommentSubmit}>Send</Button>
          </Form>
          <hr />
          {comments.map((comment, index) => (
            <Card key={index} className="mb-2 p-3 shadow-sm">
              <Card.Text><strong>{comment.name}</strong>: {comment.text}</Card.Text>
              <small className="text-muted">{comment.time}</small>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default RecipeDetail;
