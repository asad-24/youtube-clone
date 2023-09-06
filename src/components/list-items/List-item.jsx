import { useState } from "react";
import "./list-item.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS


const ListItem = ({ item }) => {
  let completeTitle = item?.snippet?.title;
  console.log(item?.channelTitle);


  const animation=()=>{
    const card = document.getElementById('animated-card');
    card.style.transform = 'scale(1)';
  }

  return (
    <>
    
      <div className="card mt-5  mb-1 fullCard " onMouseLeave={animation} id="animated-card">
        <img
          src={item?.snippet?.thumbnails?.medium?.url}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <div className="content">
            <img src={item.channelThumbnail} alt="" />
            <div className="info">
              <h5 className="title">{completeTitle}</h5>

              <h6 className="channe-name">{item?.snippet?.channelTitle}</h6>
              <div className="watchAndAdd d-flex justify-content-between align-items-center mt-3 ">
              <button type="button" class="btn  btn-outline-secondary onHoverBtn">Watch later</button>
              <button type="button" class="btn btn-outline-secondary onHoverBtn ms-2">Add to queue</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListItem;
