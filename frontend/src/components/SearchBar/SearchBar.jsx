import React, { useContext } from "react";
import { VideoContext } from "../../context/VideoContext";
import "./SearchBar.css";
// import { useNavigate } from "react-router-dom";

const SearchBar = ({fetchVideos}) => {
  const { searchTerm, setSearchTerm } = useContext(VideoContext)
  const handleChange = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value)
    console.log(searchTerm)
  }
  return (
    <div className="searchbar">
      <input
        type="text"  
        placeholder='"Search Videos'
        onChange={handleChange}
        value={searchTerm}/>
      <button type="submit" onClick={() => {fetchVideos(searchTerm)}}>Search</button>
    </div>

      //<button type="submit" onClick=[() => {fetchVideos()}]>Search</button>
  );
};

export default SearchBar;