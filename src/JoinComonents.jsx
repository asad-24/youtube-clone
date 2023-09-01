import React from "react";
import Navbar from "./components/navbar/Navbar";
import Fixicons from "./components/fixIcons/Fixicons";
import Index from "./components/index";
import ButtonSlider from "./components/buttonSlider/ButtonSlider";
import Footer from "./components/footer/Footer";

function JoinComonents() {
  return (
    <div>
      <div className="container-fluid ">
        <Navbar />

        <div className="main-con mt-2">
          <div className="fixIcons-left">
            <Fixicons />
          </div>

          <div className="index-right d-flex flex-column">
            <div className=" filter fixed-top">
              <ButtonSlider />
            </div>

            <div className=" video-container">
         
                
                  <Index />
                </div>
              
        
          </div>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default JoinComonents;
