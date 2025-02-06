import React from "react";
import "./Home.css";
import avatarImage from "../../assets/avataaars.svg";

export default function Home() {
  return (
    <>
      <div className="bg-light-green d-flex flex-column align-items-center justify-content-center">
        <img src={avatarImage} alt="Avatar" className="mb-4" />
        <div className="text-center pt-2 text-white">
          <h2 className="text-uppercase mb-3 fs-1 fw-bolder">
            Start Framework
          </h2>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="line me-3 bg-white"></div>
            <i className="fa-solid fa-star"></i>
            <div className="line ms-3 bg-white"></div>
          </div>
          <div>Graphic Artist - Web Designer - Illustrator</div>
        </div>
      </div>
    </>
  );
}
