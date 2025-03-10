import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavorites } from "../redux/favoritesSlice";
import { Button, Container, Form, Nav, Navbar, Offcanvas, Image } from "react-bootstrap";
import { HeartFill } from "react-bootstrap-icons";

function Header({ onLoginClick }) {
  const [showFavorites, setShowFavorites] = useState(false);
  const favoriteRecipes = useSelector((state) => state.favorites?.items || []);
  const dispatch = useDispatch();

  return (
    <>
      <Navbar expand="lg" className="bg-dark shadow-sm px-3 py-2">
        <Container fluid>
          {/* Logo */}
          <Navbar.Brand as={Link} to="/" className="text-white fw-bold fs-3" style={{ letterSpacing: "1px" }}>
            <img
              style={{ filter: "invert(1)", height: "40px" }}
              src="https://cdn.prod.website-files.com/658c0214eb231c5e670ffec5/65ddc9a13350d434904e595e_Chefit%20-%20Logo.svg"
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className="bg-white" />
          <Navbar.Collapse id="navbarScroll">
            {/* Menu */}
            <Nav className="me-auto mx-auto">
              <Nav.Link as={Link} to="/" className="text-white fs-5 mx-3 fw-semibold">Home</Nav.Link>
              <Nav.Link as={Link} to="/about" className="text-white fs-5 mx-3 fw-semibold">About</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="text-white fs-5 mx-3 fw-semibold">Contact</Nav.Link>
            </Nav>

            {/* Search & Buttons */}
            <div className="d-flex align-items-center">
              <Form className="d-flex me-3">
                <Form.Control
                  type="search"
                  placeholder="Search recipes..."
                  className="me-2 rounded-pill px-3"
                  aria-label="Search"
                />
                <Button variant="outline-light" className="rounded-pill px-3">
                  <i className="fas fa-search"></i>
                </Button>
              </Form>

              {/* Recipe Box Button */}
              <Button
                as={Link} to="/recipebox"
                className="rounded-pill px-4 py-2 fw-semibold shadow me-2"
                style={{ backgroundColor: "#ff4da6", border: "none" }}
              >
                Recipe Box
              </Button>

              {/* Favorite List Icon */}
              <Button
                variant="outline-light"
                className="position-relative me-3"
                onClick={() => setShowFavorites(true)}
              >
                <HeartFill size={24} className="text-danger" />
                {favoriteRecipes.length > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {favoriteRecipes.length}
                  </span>
                )}
              </Button>

              {/* Login Button */}
              <Button
                variant="danger"
                className="rounded-pill px-4 py-2 fw-semibold shadow"
                onClick={onLoginClick}
              >
                Login
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Offcanvas - Favorite Recipes */}
      <Offcanvas show={showFavorites} onHide={() => setShowFavorites(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>My Favorite Recipes ❤️</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {favoriteRecipes.length === 0 ? (
            <p className="text-muted text-center">No favorite recipes yet.</p>
          ) : (
            <ul className="list-group">
              {favoriteRecipes.map((recipe, index) => (
                <li key={recipe.id || index} className="list-group-item d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <Image
                      src={recipe.image || "/placeholder.jpg"}
                      alt={recipe.title}
                      width={50}
                      height={50}
                      rounded
                      className="me-2"
                      onError={(e) => e.target.src = "/placeholder.jpg"}
                    />
                    <Link to={`/recipe/${recipe.id}`} className="text-decoration-none fw-semibold">
                      {recipe.title}
                    </Link>
                  </div>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => dispatch(removeFromFavorites(recipe.id))}
                  >
                    Remove
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Header;
