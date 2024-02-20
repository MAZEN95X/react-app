import React from "react";

export default function Footer() {
  return (
    <>
      <div className="footer text-center pt-5  ">
        <div className="container pb-5">
          <div className="row">
            <div className="col-md-4">
              <div>
                <h2 className="text-white fw-bold mb-3">LOCATION</h2>
                <p className="text-white mb-2">2215 John Daniel Drive</p>
                <p className="text-white mb-2">Clirk,Mo 65234</p>
              </div>
            </div>
            <div className="col-md-4">
              <h2 className="text-white fw-bold mb-3">AROUND THE WEB</h2>
              <div>
                <ul className="d-flex justify-content-center align-items-center">
                  <div className="icon">
                    <i className="fa-brands   text-white  fa-facebook"></i>
                  </div>
                  <div className="icon">
                    <i className="fa-brands   text-white  fa-twitter"></i>
                  </div>
                  <div className="icon">
                    <i className="fa-brands   text-white  fa-linkedin"></i>
                  </div>
                  <div className="icon">
                    <i className="fa-solid   text-white  fa-globe"></i>
                  </div>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <h2 className="text-white fw-bold mb-3">ABOUT FREELANCER</h2>
                <p className="text-white">
                  Freelance is a free to use,licensed bootstrap theme created by
                  route
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="copy-right py-3">
          <p className="text-white">Copyright &copy; Your Website 2024</p>
        </div>
      </div>
    </>
  );
}
