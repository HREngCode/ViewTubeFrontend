//General Imports
import React, {useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';

//Component Imports
// import VideoPresenter from '../../components/VideoPresenter';

//Context Imports
import { VideoContext } from "../../context/VideoContext";

const SearchResultsPage = ({video}) => {
  const { videos } = useContext(VideoContext);

  return ( 
      <div>
        {videos && videos.map((video) => (
          <p key={video.id.videoId}>
          <li>
          <Link to={`/video/${video.id.videoId}`}><img src={video.snippet.thumbnails.default.url} alt="dog video"></img></Link>
          <h4>{video.snippet.title}</h4>
          </li>
          </p>
        ))}
      </div>
    );
  };

export default SearchResultsPage;
