import React, { useState } from 'react'

function Sidebar({ isOpen, onClose }) {
  
  
  return (
    <div>
  <div className={`off-canvas ${isOpen ? 'open' : 'closed'}`}>
<button className="btn btn-primary toggleRealbutton" onClick={onClose} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
  Button
</button></div>

{<div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    <ul>
        <li>home</li>
        <li>service</li>
        <li>home</li>
        <li>about</li>
    </ul>
  </div>
</div>}
      
    </div>
  )
}

export default Sidebar
