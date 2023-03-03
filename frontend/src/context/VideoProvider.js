//provide a JSX element that will provide context to its children
//declare any state/functionality you need here

//General Imports
import { useState } from 'react';

//Context Imports
import { VideoContext} from './VideoContext';


export const VideoProvider = ({children}) => {
    const [videos, setVideos] = useState([])
    const [defaultVideos, setDefaultVideos] = useState([])
    const [searchTerm, setSearchTerm] = useState(''); 
    const [vidId, setVidId] = useState(''); 


    let value = {
        videos,
        setVideos,
        defaultVideos,
        setDefaultVideos,
        searchTerm,
        setSearchTerm,
        vidId,
        setVidId
    }
    return(
        <VideoContext.Provider value={value}>{children}</VideoContext.Provider>
    )
}

