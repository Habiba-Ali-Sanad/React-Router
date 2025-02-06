import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="blue text-white">
        <div className="p-5 row text-center">
          {/* Location */}
          <div className="col-12 col-md-4 my-4">
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p className="mt-3">Clark, MO 65243</p>
          </div>

          {/* Social Media */}
          <div className="col-12 col-md-4 my-4">
            <h3>AROUND THE WEB</h3>
            <div className="d-flex justify-content-center gap-2 p-2">
              <div className="icon-circle">
                <i className="fa-brands fa-facebook"></i>
              </div>
              <div className="icon-circle">
                <i className="fa-brands fa-twitter"></i>
              </div>
              <div className="icon-circle">
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
              <div className="icon-circle">
                <i className="fa-solid fa-globe"></i>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="col-12 col-md-4 my-4">
            <h3>ABOUT FREELANCER</h3>
            <p>
              Freelance is a free-to-use, licensed Bootstrap theme created by
              Route.
            </p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className=" text-center mt-3 pg-balckblue py-4">
          <p>Copyright © Your Website 2021</p>
        </div>
      </div>
    </>
  );
}
