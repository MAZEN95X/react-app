import React from "react";
import notFoundImg from "../../images/error.svg";
import { Link } from "react-router-dom";
import "../../index.css";
function NotFound() {
  return (
    <>
      <div className="text-center my-2">
        <img className="w-50 py-5" src={notFoundImg} alt="" />
      </div>
      <div className="text-center">
        <button className="btn btn-outline-dark  text-white  text-center notfound">
          <Link to={"home"}>Go To Home</Link>
        </button>
      </div>
    </>
  );
}

export default NotFound;
