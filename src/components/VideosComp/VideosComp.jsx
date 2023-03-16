import React from "react";
import shopMonkeyVideo from "../../video/golink.mp4";
import ReactPlayer from "react-player";
import "./VideosCss.css";
// import poster from "../../image/golinkThumbNail.jpg";
import poster from "../../image/golinkThumbNail.png";
// src/image/Image 12-2-22 at 2.19 PM.jpg
function VideosComp(props) {
  return (
    <div>
      <>
        <video controls class="video" poster={poster}>
          <source src={shopMonkeyVideo} type="video/mp4" />
        </video>
      </>
    </div>
  );
}

export default VideosComp;
