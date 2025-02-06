import React from "react";
import "./Contact.css"

export default function Contact() {
  return (
    <>
      {/* Full Page Container */}
      <div className="page m-4">
        <h2 className="text-uppercase fs-1 fw-bolder">Contact Section</h2>
        <div className="d-flex align-items-center justify-content-center mb-3">
          <div className="line me-3 blue"></div>
          <i className="fa-solid fa-star"></i>
          <div className="line ms-3 blue"></div>
        </div>

        {/* Contact Form */}
        <form  className="w-50 p-3 mx-auto mt-5 ">
          <div className="mb-3">
            <input
              id="userName"
              type="text"
              placeholder="userName"
              name="userName"
              className="form-control border-0 border-bottom py-3"
            />
          </div>

          <div className="mb-3">
            <input
              id="userAge"
              type="number"
              placeholder="userAge"
              name="userAge"
              className="form-control border-0 border-bottom py-3"
            />
          </div>

          <div className="mb-3">
            <input
              id="userEmail"
              type="email"
              placeholder="userEmail"
              name="userEmail"
              className="form-control border-0 border-bottom py-3"
            />
          </div>

          <div className="mb-3">
            <input
              id="userPassword"
              type="password"
              placeholder="userPassword"
              name="userPassword"
              className="form-control border-0 border-bottom py-3"
            />
          </div>

          <div className="text-start">
            <button
              className="btn mt-4 text-white px-4"
              style={{ backgroundColor: "#1abc9c" }}
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
