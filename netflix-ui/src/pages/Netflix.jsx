import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import MovieLogo from "../assets/homerlogo.jpg";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Slider from "../components/Slider";
import PlayArrowSharpIcon from "@mui/icons-material/PlayArrowSharp";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, fetchMovies } from "../store";
import "./Netflix.css";
import BackgroundImage from "../components/BackgroundImage";

function Netflix() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.netflix.movies);




  useEffect(() => {
    dispatch(fetchMovies({ type: "all" }));
  }, []);//load content when the page will first render

  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div>
      <Navbar isScrolled={isScrolled} />
    <BackgroundImage/>
      <Slider movies={movies} />
    </div>
  );
}

export default Netflix;
