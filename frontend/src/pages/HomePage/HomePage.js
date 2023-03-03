//General Imports
import React, { useEffect, useContext } from "react";
import {Link} from 'react-router-dom';

//Context Imports
import { VideoContext } from "../../context/VideoContext";



const HomePage = ({defaultVideo}) => {
  const { defaultVideos } = useContext(VideoContext);
  return ( 
    <div className="title-page"><h2><b>CHECK OUT THESE VIDEOS</b></h2>
      <div className="flext-container">
        {defaultVideos && defaultVideos.map((defaultVideo) => (
          <div key={defaultVideo.id.videoId}>
          <div>
          <Link to={`/video/${defaultVideo.id.videoId}`}><img src={defaultVideo.snippet.thumbnails.default.url} alt="transformers video"></img></Link>
          <div className="title-text">
          <h4>{defaultVideo.snippet.title}</h4>
          </div>
          </div>
          </div>
        ))}
      </div>
      </div>
    );
  };
  
  export default HomePage;