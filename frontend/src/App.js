// General Imports
import { Routes, Route} from "react-router-dom";
import "./App.css";
import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

// Pages Imports
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import HomePage from "./pages/HomePage/HomePage";
import VideoPage from "./pages/VideoPage/VideoPage";
import SearchResultsPage from "./pages/SearchResultsPage/SearchResultsPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import SearchBar from "./components/SearchBar/SearchBar";
import Footer from "./components/Footer/Footer";
import { VideoContext } from "./context/VideoContext";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import axios from 'axios';
import {KEY} from "./localKey"


function App() {      
  const {videos, setVideos} = useContext(VideoContext);
  const [comments, setComments]= useState([]);
  const {defaultVideos, setDefaultVideos} = useContext(VideoContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchDefaultVideos();
    // fetchAllComments();
  }, []); //used when comoponent is first mounted

  const fetchVideos = async (searchTerm) => {
    try {
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${KEY}&part=snippet&type=video&maxResults=5`);
      console.log(response.data)  
      setVideos(response.data.items);
      navigate('/search')
    } catch (error) {
      console.log(error.response.data)
    }
  };

  const fetchDefaultVideos = async () => {
    try {
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=transformers&key=${KEY}&part=snippet&type=video&maxResults=5`);
      setDefaultVideos(response.data.items);
      console.log(defaultVideos)  
    } catch (error) {
      console.log(error.response.data)
    }
  };


      return (
        <div >
          <Navbar />
          <SearchBar fetchVideos={fetchVideos}/>
          <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<PrivateRoute><HomePage defaultVideos={defaultVideos} fetchDefaultVideos={fetchDefaultVideos} /></PrivateRoute>}/>
          <Route path="/search" element={<PrivateRoute><SearchResultsPage videos={videos} /></PrivateRoute>} />
          <Route path="/video/:vidId" element={<PrivateRoute><VideoPage  /></PrivateRoute>} />
          </Routes>
          <Footer />
        </div>
      );
}

export default App;
