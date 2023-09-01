import React, { useState } from "react";
import '../../media'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import logo from "../../logo.svg"
import shortIcon from '../../assests/short-video-icon.png'
import subscribeIcon from '../../assests/subscription.png'
import historyIcon from '../../assests/history-icon.png'
import homeIcon from '../../assests/home-icon.png'
import trendingIcon from '../../assests/trending.png'
import musicIcon from '../../assests/music-icon.png'
import gameIcon from '../../assests/game-icon.png'
import newsIcon from '../../assests/new-icon.png'
import sportIcon from '../../assests/sport-icon.png'
import browserIcon from '../../assests/browser-icon.png'
import libraryIcon from '../../assests/library-icon.png'
import micIcon from '../../assests/mic-icon.png'

import '../../App.css'
import './navbar.css'


function Navbar() {
 const [hide, setHide]=useState(true)
 const [show, setShow]=useState(false)

const showSearch=()=>{
if (hide===true){
  setHide(false)
 
}
else{
  setHide(true)

}
if(show===false){
  setShow(true)
}
else{
  setShow(false)
}
}

const backMoveActive=()=>{
  if(show===false){
    setShow(true)
  }
  else{
    setShow(false)
  }
  if (hide===true){
    setHide(false)
   
  }
  else{
    setHide(true)
  
  }
}

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-light fixed-top ps-3 pe-3">

      {hide &&  <div className="logoPart d-flex  align-items-center hide-show"  >
            <div className="toggle1 ms-2 " data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">  
            <div className="toggleLine mt-1"></div>
            <div className="toggleLine  mt-1"></div>
            <div className="toggleLine  mt-1"></div>
            
            </div>
         
          <img src={logo} alt="logo" className="ms-3"/>
          <h5 className="fw-bold "> YouTube</h5>
       
          </div>}

          {hide && <div className="formSpace d-flex justify-content-end align-items-center hide-show">
             <form
              className="d-flex navInput"
              role="search"
            >
              <div className="input-group searchBar1">
                <input
                  type="text"
                  className="form-control navSearch"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder="Search"
                />
                <span className="input-group-text searchIconBox" id="inputGroup-sizing-default" >
                <i className="bi bi-search"></i>
                </span>
              </div>
            </form>
           <div className="singleSearch  "> <i className="bi bi-search " onClick={showSearch}></i></div>
            <div className="microphone d-flex justify-content-center align-items-center ms-2"><img src={micIcon} className="mic-icon" alt="mic" /></div>
            </div>}

          {hide &&  <div className="navIcon d-flex justify-content-end align-item-center hide-show">
            <i className="bi bi-grid-3x3-gap me-4 fs-4"></i>
            <i className="bi bi-three-dots-verticalfs-4"></i>
            <button type="button" className="btn " id="signIn"><i className="bi bi-person-circle me-2"></i>Sign in</button>
            </div>}
          <div className="clicky-show d-flex justify-content-center align-items-center">
            {show&& <div className="back-move d-flex justify-content-center align-items-center ms-2 me-2 " onClick={backMoveActive}><i class="bi bi-arrow-left"></i></div>}
          {show &&  <div className="input-group ">
                <input
                  type="text"
                  className="form-control navSearch1"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder="Search"
                />
                <span className="input-group-text searchIconBox" id="inputGroup-sizing-default" >
                <i className="bi bi-search"></i>
                </span>
              </div>}
             {show&& <div className="microphone d-flex justify-content-center align-items-center ms-2"><img src={micIcon} className="mic-icon" alt="mic" /></div>}
             </div>
        
      </nav>
   
     
<div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div class="logoPart d-flex  align-items-center p-3">
 
    <div className="toggle1 ms-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">  
            <div className="toggleLine mt-1"></div>
            <div className="toggleLine  mt-1"></div>
            <div className="toggleLine  mt-1"></div>
            
            </div>
  
            <img src={logo} alt="logo" className="ms-3 youtube-logo"/>
          <h5 className="fw-bold youtube-text"> YouTube</h5>
  </div>
  <div class="offcanvas-body">
  <div className= 'slider-on-off '>
  
  <ul>
  <li className="fw-bold "><img src={homeIcon} alt="icon"className="short-icon me-4" />Home</li>
    <li className="fw-bold mt-2"><img src={shortIcon} alt="icon"className="short-icon me-4 " />Short</li>
    <li className="fw-bold mt-2"><img src={subscribeIcon} alt="icon"className="short-icon me-4 " />Subscription</li>
   
  </ul>
  <hr />
  <ul>
  <li className="fw-bold "><img src={libraryIcon} alt="icon" className="short-icon  me-4 " />Library</li>
  <li className="fw-bold mt-3"><img src={historyIcon} alt="icon" className="short-icon me-4 " />History</li>
  </ul>
  <hr />
<ul>

  Sign in to like videos, comment, and subscribe.
  <button type="button" className="btn mt-3" id="signIn"><i className="bi bi-person-circle me-2"></i>Sign in</button>
</ul>
<hr />
<ul>
<h6 className="explore">Explore</h6>
<li className="fw-bold "><img src={trendingIcon} alt="icon" className="short-icon trending-icon  me-4 " />Trending</li>
<li className="fw-bold "><img src={musicIcon} alt="icon" className="short-icon trending-icon  me-4 " />Music</li>
<li className="fw-bold "><img src={gameIcon} alt="icon" className="short-icon trending-icon  me-4 " />Game</li>
<li className="fw-bold "><img src={newsIcon} alt="icon" className="short-icon trending-icon  me-4 " />News</li>
<li className="fw-bold "><img src={sportIcon} alt="icon" className="short-icon trending-icon  me-4 " />Sport</li>

</ul>
<hr />
<ul>
<li className="fw-bold "><img src={browserIcon} alt="icon" className="short-icon trending-icon  me-4 " />Browse Channel</li>
</ul>
 


</div>
  </div>
</div>
    </div>
  );
}

export default Navbar;
