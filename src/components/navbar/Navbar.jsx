import React, { useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import logo from "../../logo.svg"
import '../../App.css'
import Sidebar from "../sidebar/Sidebar";
function Navbar() {
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false)

  const toggleOffCanvas = () => {
    setIsOffCanvasOpen(!isOffCanvasOpen);
  };

  const closeOffCanvas = () => {
    setIsOffCanvasOpen(false);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid " >
            <button className="toggle me-2  "onClick={toggleOffCanvas}> 
            <div className="toggleLine mt-1"></div>
            <div className="toggleLine  mt-1"></div>
            <div className="toggleLine  mt-1"></div>
            
            </button>
           
          <img src={logo} alt="logo" />
          <h5 className="fw-bold"> YouTube</h5>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
           <div className="formSpace w-75 d-flex justify-content-end align-items-center ">
             <form
              className="d-flex w-75 me-5 "
              role="search"
            >
              <div className="input-group">
                <input
                  type="text"
                  className="form-control "
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
                <span className="input-group-text" id="inputGroup-sizing-default">
                <i className="bi bi-search"></i>
                </span>
              </div>
            </form>
            </div>
            <div className="navIcon w-25 d-flex justify-content-end align-item-center">
            <i className="bi bi-grid-3x3-gap me-4 fs-4"></i>
            <i className="bi bi-three-dots-vertical me-4 fs-4"></i>
            <button type="button" className="btn btn-outline-primary "><i className="bi bi-person-circle me-2"></i>Sign in</button>
            </div>
          </div>
        </div>
      </nav>
      <Sidebar isOpen={isOffCanvasOpen} onClose={closeOffCanvas} />
    </div>
  );
}

export default Navbar;
