import React from "react";
import shopMonkeyVideo from "../../video/C0006_1 2.mp4";
import ReactPlayer from "react-player";
import "./VideosCss.css";
import poster from "../../image/Image 12-2-22 at 2.19 PM.jpg";
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
