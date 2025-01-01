import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./App.css";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Reservations from "./pages/Reservations";
import OrderOnline from "./pages/OrderOnline";
import Login from "./pages/Login";
import ConfirmedBooking from "./pages/ConfirmedBooking";
function App() {
  return (
    <Router>
      <main>
        <Helmet>
          <title>Little Lemon Restaurant</title>
          <meta
            name="description"
            content="Mediterranean restaurant offering traditional recipes with a modern twist"
          />
          <meta name="og:title" content="Little Lemon Restaurant" />
          <meta
            name="og:description"
            content="Mediterranean restaurant offering traditional recipes with a modern twist"
          />
          <meta name="og:image" content="%PUBLIC_URL%/restaurant.jpg" />
        </Helmet>
        <Nav />
        <div className="page-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/order-online" element={<OrderOnline />} />
            <Route path="/login" element={<Login />} />
            <Route path="/confirmed" element={<ConfirmedBooking />} />
          </Routes>
        </div>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
