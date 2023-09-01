import { useState } from "react";
import "./list-item.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { OverlayTrigger, Popover } from "react-bootstrap";
const ListItem = ({ item }) => {
  let completeTitle = item?.snippet?.title;
  console.log(item?.channelTitle);

  const popoverContent = (
    <Popover id="popover-title">
      <Popover.Body>{completeTitle}</Popover.Body>
    </Popover>
  );

  return (
    <>
    
      <div className="card mt-5  mb-1 fullCard" >
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListItem;
