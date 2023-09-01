import React from 'react'
import shortIcon from '../../assests/short-video-icon.png'
import subscribeIcon from '../../assests/subscription.png'
import historyIcon from '../../assests/history-icon.png'
import homeIcon from '../../assests/home-icon.png'
import libraryIcon from '../../assests/library-icon.png'




import trendingIcon from '../../assests/trending.png'
import musicIcon from '../../assests/music-icon.png'
import gameIcon from '../../assests/game-icon.png'
import newsIcon from '../../assests/new-icon.png'
import sportIcon from '../../assests/sport-icon.png'
import browserIcon from '../../assests/browser-icon.png'
import './fixIcon.css'



function Fixicon() {
  return (
    <div className='container-fluid'>
      
      <div className="fix-icon">
     <ul>
      <li className=" "><img src={homeIcon} alt="icon"className="short-icon " />Home</li>
      <li className=" mt-2"><img src={shortIcon} alt="icon"className="short-icon " />Short</li>
      <li className=" mt-2"><img src={subscribeIcon} alt="icon"className="short-icon  " />Subscription</li>
      <li className="fw-bold "><img src={libraryIcon} alt="icon" className="short-icon " />Library</li>
    <li className="fw-bold mt-3"><img src={historyIcon} alt="icon" className="short-icon " />History</li>
     
    </ul>
     </div>
     <div className= 'sideBar'>
  
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
  )
}

export default Fixicon
