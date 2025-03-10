import React, { useState } from "react";
import { Container, Row, Col, Nav, Card, Button, Pagination, Image, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const recipes = [
  { title: "Italian-style tomato salad", time: "14 minutes", img: "./public/fooddetail.jpg" },
  { title: "Vegetable and shrimp spaghetti", time: "15 minutes", img: "./public/food2.jpg" },
  { title: "Lotus delight salad", time: "20 minutes", img: "./public/food3.jpg" },
  { title: "Snack cakes", time: "21 minutes", img: "./public/food4.jpg" },
  { title: "Italian-style tomato salad", time: "14 minutes", img: "./public/food4.jpg" },
  { title: "Vegetable and shrimp spaghetti", time: "15 minutes", img: "./public/food2.jpg" },
  { title: "Lotus delight salad", time: "20 minutes", img: "./public/fooddetail.jpg" },
  { title: "Snack cakes", time: "21 minutes", img: "./public/food3.jpg" },
];

const genevieveRecipes = [
  { title: "Grilled Chicken", time: "25 minutes", img: "./public/food3.jpg" },
  { title: "Pasta Primavera", time: "30 minutes", img: "./public/food2.jpg" },
];

const ITEMS_PER_PAGE = 4;
function RecipeBox() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("saved");
  const [folders, setFolders] = useState([]);
  const [folderName, setFolderName] = useState("");

  const totalPages = Math.ceil(recipes.length / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentRecipes = recipes.slice(indexOfFirstItem, indexOfLastItem);

  const handleAddFolder = () => {
    if (folderName.trim() !== "") {
      setFolders([...folders, folderName]);
      setFolderName("");
    }
  };

  const handleRemoveFolder = (index) => {
    setFolders(folders.filter((_, i) => i !== index));
  };

  return (
    <Container className="mt-4">
      <Row className="align-items-center mb-4">
        <Col xs="auto">
          <Image src="profile.jpg" roundedCircle />
        </Col>
        <Col>
          <h2>Emma Gonzalez's Recipe Box</h2>
          <p>Emma Gonzalez is a deputy editor at Chefify.</p>
          <Button 
              variant="primary" 
              onClick={() => {
                navigator.clipboard.writeText(window.location.href)
                  .then(() => alert("Copied to clipboard!"))
                  .catch(err => console.error("Failed to copy:", err));
              }}
            >
              Share
          </Button>

        </Col>
      </Row>
      <Nav variant="tabs" activeKey={activeTab} onSelect={(selectedKey) => setActiveTab(selectedKey)}>
        <Nav.Item>
          <Nav.Link eventKey="saved">Saved Recipes</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="folders">Folders</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="recipes">Recipes by Genevieve</Nav.Link>
        </Nav.Item>
      </Nav>

      {activeTab === "saved" && (
        <Row className="mt-3">
          {currentRecipes.map((recipe, index) => (
            <Col key={index} md={3} className="mb-3">
              <Card>
                <Card.Img variant="top" src={recipe.img} />
                <Card.Body>
                  <Card.Title>{recipe.title}</Card.Title>
                  <small className="text-muted">{recipe.time}</small>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
      
      {activeTab === "folders" && (
        <div className="mt-3">
          <Form.Control type="text" value={folderName} onChange={(e) => setFolderName(e.target.value)} placeholder="New Folder Name" />
          <Button onClick={handleAddFolder} className="mt-2">Add Folder</Button>
          <ul className="mt-3">
            {folders.map((folder, index) => (
              <li key={index}>
                {folder} <Button variant="danger" size="sm" onClick={() => handleRemoveFolder(index)}>Delete</Button>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {activeTab === "recipes" && (
        <Row className="mt-3">
          {genevieveRecipes.map((recipe, index) => (
            <Col key={index} md={3} className="mb-3">
              <Card>
                <Card.Img variant="top" src={recipe.img} />
                <Card.Body>
                  <Card.Title>{recipe.title}</Card.Title>
                  <small className="text-muted">{recipe.time}</small>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      {activeTab === "saved" && (
        <Pagination className="justify-content-center mt-4">
          <Pagination.Prev 
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          />
          {[...Array(totalPages)].map((_, idx) => (
            <Pagination.Item 
              key={idx + 1} 
              active={idx + 1 === currentPage} 
              onClick={() => setCurrentPage(idx + 1)}
            >
              {idx + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next 
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          />
        </Pagination>
      )}
    </Container>
  );
}

export default RecipeBox;