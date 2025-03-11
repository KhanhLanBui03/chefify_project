import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AdminLogin from "./pages/AdminLogin";
import RecipeBox from "./pages/RecipeBox";
import RecipeDetail from "./components/RecipeDetail";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  useEffect(() => {}, []);

  return (
    <Provider store={store}>
      <Router>
        <div className="d-flex flex-column min-vh-100 container-fluid">
          <Header onLoginClick={() => setShowLogin(true)} />
          <main className="flex-grow-1 p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/recipe/:id" element={<RecipeDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/recipebox" element={<RecipeBox />} />
              <Route path="/admin" element={<AdminLogin />} />
            </Routes>
          </main>
          <Footer />
          <LoginForm show={showLogin} onClose={() => setShowLogin(false)} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
