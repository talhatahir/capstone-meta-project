import React from "react";

function Hero() {
  return (
    <section className="hero" style={{ backgroundColor: "#495e57" }}>
      <div className="hero-container">
        <div className="hero-content">
          <h1>Welcome to Little Lemon</h1>
          <h3>Chicago, Illinois</h3>
          <p>
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </p>
        </div>
        <div className="hero-image">
          <img src={require("../assets/images/lemon.webp")} alt="Little Lemon Restaurant" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
