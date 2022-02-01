import React from "react";
import Navbar from "./components/Navbar/navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "pages/Home/home";
import Review from "pages/Review/review";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/review" element={<Review />}>
          <Route path=":movieId" element={<Review />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
