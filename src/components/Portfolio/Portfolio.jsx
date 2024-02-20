import React, { useState } from "react";
import image1 from "../../images/poert1.png";
import image2 from "../../images/port2.png";
import image3 from "../../images/port3.png";

export default function Portfolio() {
  const [images, setimages] = useState([
    { src: image1, id: "image1" },
    { src: image2, id: "image2" },
    { src: image3, id: "image3" },
    { src: image2, id: "image4" },
    { src: image3, id: "image5" },
    { src: image1, id: "image6" },
  ]);

  return (
    <>
      <div className="portfolio py-5 text-center">
        <h2 className="fw-bolder ">PORTFOLIO COMPONENT</h2>
        <div className="icon-portfolio mb-5">
          <i className="fa-solid fa-star "></i>
        </div>
        <div className="container">
          <div className="row g-4">
            {images.map((item) => (
              <div key={item.id} className="col-md-4">
                <div className="portfolio-item">
                  <img src={item.src} alt="" className="w-100 rounded-3" />
                  <div
                    data-bs-toggle="modal"
                    data-bs-target={"#" + item.id}
                    className="plus rounded-3"
                  >
                    <i className="fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>
            ))}
            {images.map((item) => (
              <>
                <div
                  className="modal fade"
                  id={item.id}
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <img src={item.src} alt="" className="w-100" />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
