import React from 'react'
import shortIcon from '../../assests/short-video-icon.png'
import subscribeIcon from '../../assests/subscription.png'
import historyIcon from '../../assests/history-icon.png'
import homeIcon from '../../assests/home-icon.png'
import libraryIcon from '../../assests/library-icon.png'
import './footer.css'
function Footer() {
  return (
    <div>
        <div className="footer-icon bottom-fixed">
     <ul className='list-main-component'>
      <li className=" "><img src={homeIcon} alt="icon"className="short-icon " />Home</li>
      <li className=" mt-2"><img src={shortIcon} alt="icon"className="short-icon " />Short</li>
      <li className=" mt-2"><img src={subscribeIcon} alt="icon"className="short-icon  " />Subscription</li>
      <li className="fw-bold "><img src={libraryIcon} alt="icon" className="short-icon " />Library</li>
    <li className="fw-bold mt-3"><img src={historyIcon} alt="icon" className="short-icon " />History</li>
     
    </ul>
     </div>
    </div>
  )
}

export default Footer
