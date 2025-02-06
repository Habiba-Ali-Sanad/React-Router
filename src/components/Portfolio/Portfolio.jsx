import React, { useState } from "react";
import "./Portfolio.css";
import port1 from "../../assets/poert1.png";
import port2 from "../../assets/port2.png";
import port3 from "../../assets/port3.png";

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      {/* Full Page Container */}
      <div className="page d-flex flex-column justify-content-center align-items-center">
        <h2 className="text-uppercase fs-1 fw-bolder">portfolio component</h2>
        <div className="d-flex align-items-center justify-content-center mb-3">
          <div className="line me-3 blue"></div>
          <i className="fa-solid fa-star"></i>
          <div className="line ms-3 blue"></div>
        </div>

        {/* Images Container */}
        <div className="container images-container">
          <div className="row g-4 justify-content-center mb-4">
            {/* First Row */}
            {[port1, port2, port3].map((image, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 d-flex justify-content-center"
              >
                <div className="rounded-3 overflow-hidden position-relative image-container">
                  <img
                    src={image}
                    alt={`Portfolio ${index + 1}`}
                    className="img-fluid rounded-3"
                    onClick={() => openModal(image)}
                    style={{ cursor: "pointer" }}
                  />
                  <div
                    className="layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center"
                    onClick={() => openModal(image)}
                  >
                    <i className="text-white fa-solid fa-plus fa-3x"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row g-4 justify-content-center">
            {/* Second Row */}
            {[port1, port2, port3].map((image, index) => (
              <div
                key={index + 3}
                className="col-lg-4 col-md-6 d-flex justify-content-center"
              >
                <div className="rounded-3 overflow-hidden position-relative image-container">
                  <img
                    src={image}
                    alt={`Portfolio ${index + 4}`}
                    className="img-fluid rounded-3"
                    onClick={() => openModal(image)}
                    style={{ cursor: "pointer" }}
                  />
                  <div
                    className="layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center"
                    onClick={() => openModal(image)}
                  >
                    <i className="text-white fa-solid fa-plus fa-3x"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedImage && (
          <div className="modal-backdrop " onClick={closeModal}>
            <div
              className="modal-container"
              onClick={(e) => e.stopPropagation()}
            >
            
              <img src={selectedImage} alt="Selected" className="img-fluid" />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
