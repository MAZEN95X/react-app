import React from "react";

export default function About() {
  return (
    <>
      <div className="about vh-100 d-flex justify-content-center align-items-center text-center">
        <div>
          <h2 className="fw-bolder text-white mb-3">ABOUT COMPONENT</h2>
          <div className="icon-about">
            <i className="fa-solid fa-star text-white"></i>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p className="text-white">
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
              <div className="col-md-6">
                <p className="text-white">
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
