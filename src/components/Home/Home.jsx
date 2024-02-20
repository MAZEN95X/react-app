import React from "react";
import img from "../../images/avataaars.svg";
export default function Home() {
  return (
    <>
      <div className="home vh-100 d-flex justify-content-center align-content-center text-center">
        <div>
          <img src={img} alt="" className="w-100" />
          <h1 className="text-white fw-bold my-3">START FRAMEWORK</h1>
          <div className="icon-home">
            <i className="fa-solid fa-star text-white"></i>
          </div>
          <p className="text-white mt-3">
            Graphic Artict - Web Designer - Illustratopr
          </p>
        </div>
      </div>
    </>
  );
}
