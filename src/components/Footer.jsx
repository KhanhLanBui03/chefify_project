import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          {/* About Us */}
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              Welcome to our website, a wonderful place to explore and learn how
              to cook like a pro.
            </p>
            <div className="d-flex">
              <input
                type="email"
                className="form-control me-2"
                placeholder="Enter your email"
              />
              <button className="btn btn-danger">Send</button>

            </div>
          </div>

          {/* Learn More */}
          <div className="col-md-2">
            <h5>Learn More</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Our Cooks</a></li>
              <li><a href="#" className="text-white">See Our Features</a></li>
              <li><a href="#" className="text-white">FAQ</a></li>
            </ul>
          </div>

          {/* Shop */}
          <div className="col-md-2">
            <h5>Shop</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Gift Subscription</a></li>
              <li><a href="#" className="text-white">Send Us Feedback</a></li>
            </ul>
          </div>

          {/* Recipes */}
          <div className="col-md-4">
            <h5>Recipes</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">What to Cook This Week</a></li>
              <li><a href="#" className="text-white">Pasta</a></li>
              <li><a href="#" className="text-white">Dinner</a></li>
              <li><a href="#" className="text-white">Healthy</a></li>
              <li><a href="#" className="text-white">Vegetarian</a></li>
              <li><a href="#" className="text-white">Vegan</a></li>
              <li><a href="#" className="text-white">Christmas</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-4">
          <h4 className="fw-bold">Chefify</h4>
          <p className="mb-0">
            &copy; 2023 Chefify Company | <a href="#" className="text-white">Terms of Service</a> | <a href="#" className="text-white">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
