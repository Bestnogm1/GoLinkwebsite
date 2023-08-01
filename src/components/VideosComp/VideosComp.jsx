import React from "react";
import ValastroVideo from "../../video/Valastro_V3.mp4";
import ReactPlayer from "react-player";
import "./VideosCss.css";
// import poster from "../../image/golinkThumbNail.jpg";
import poster from "../../image/valstro.png";
// src/image/Image 12-2-22 at 2.19 PM.jpg
function VideosComp(props) {
  return (
    <div>
      <>
        <video controls class="video" poster={poster}>
          <source src={ValastroVideo} type="video/mp4" />
        </video>
      </>
    </div>
  );
}

export default VideosComp;
