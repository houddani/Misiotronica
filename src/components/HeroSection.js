import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="./videos/video-3.mp4" autoPlay loop muted />
      <h1>LO MEJOR EN ELECTRONICA ESTÁ ACÁ</h1>
      <p>Qué estás esperando!</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large">
          EMPEZÁ A COMPRAR
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
