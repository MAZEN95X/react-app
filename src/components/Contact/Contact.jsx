import React from "react";

export default function Contact() {
  return (
    <>
      <div className="contact py-xxl-5">
        <h2 className="fw-bolder text-center">CONTACT SECTION</h2>
        <div className="icon-portfolio mb-5 text-center">
          <i className="fa-solid fa-star "></i>
        </div>
        <div className="w-50 m-auto">
          <form action="">
            <input
              type="text"
              placeholder="User Name"
              className="w-100 form-control form-control-lg border-0 border-bottom rounded-0 mb-5"
            />
            <input
              type="number"
              placeholder="User Age"
              className="w-100 form-control form-control-lg border-0 border-bottom rounded-0 mb-5"
            />
            <input
              type="email"
              placeholder="User Email"
              className="w-100 form-control form-control-lg border-0 border-bottom rounded-0 mb-5"
            />
            <input
              type="password"
              placeholder="User Password"
              className="w-100 form-control form-control-lg border-0 border-bottom rounded-0 mb-5"
            />
            <button
              type="button"
              className="btn btn-lg  btn-outline-dark mb-4 "
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
