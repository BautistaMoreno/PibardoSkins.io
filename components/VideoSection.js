import React from 'react';
import video from '../VIDEO/cs2_header.mp4'; 

const VideoSection = () => (
  <div id="video">
    <h2 className="text-over-video">La mejor tienda para comprar skins</h2>
    <video autoPlay loop playsInline muted>
      <source src={video} type="video/mp4" />
      Tu navegador no soporta el elemento de video.
    </video>
  </div>
);

export default VideoSection;
