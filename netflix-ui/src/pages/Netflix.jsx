import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import BackgroundImage from "../assets/home.jpg";
import MovieLogo from "../assets/homerlogo.jpg";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Slider from "../components/Slider"
import PlayArrowSharpIcon from "@mui/icons-material/PlayArrowSharp";
import { useDispatch, useSelector } from "react-redux";
import {getGenres ,fetchMovies} from "../store"
import "./Netflix.css"


function Netflix() {
  const dispatch = useDispatch();
  const genresLoaded = useSelector((state)=>state.netflix.genresLoaded)
  const movies = useSelector((state)=>state.netflix.movies)



  useEffect(() => {
    dispatch(getGenres());
  }, []);
  

  useEffect(() => {
    dispatch(fetchMovies({type:'all'}));
  }, []);
  console.log("movies are", movies)


  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div>
      <Navbar isScrolled={isScrolled} />
      <div className="hero" BackgroundImage>
        <img
          src={'https://www.themoviedb.org/t/p/original/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg'}
          alt="background"
          className="background-image"
        />
        <div className="container">
          <div className="logo">
            <img src={MovieLogo} alt="Movie Logo" />
          </div>
          <div className="buttons flex">
            <button
              onClick={() => navigate("/player")}
              className="flex j-center a-center"
            >
              <PlayArrowSharpIcon fontSize="large" />
              Play
            </button>
            <button className="flex j-center a-center">
              <AiOutlineInfoCircle />
              More Info
            </button>
          </div>
        </div>
      </div>
    <Slider movies={movies}/>
    </div>
  );
}

export default Netflix;


