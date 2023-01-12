import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import Navbar from "../components/Navbar";
import MovieLogo from "../assets/homerlogo.jpg";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Slider from "../components/Slider";
import PlayArrowSharpIcon from "@mui/icons-material/PlayArrowSharp";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, fetchMovies } from "../store";
import "./Netflix.css";
import BannerImage from "../components/BannerImage";

function Netflix() {
  const dispatch = useDispatch();
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const movies = useSelector((state) => state.netflix.movies);




  useEffect(() => {
    dispatch(fetchMovies({ type: "all" }));
  }, []);//load content when the page will first render

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) navigate("/login");
  });

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div>
      <Navbar isScrolled={isScrolled} />
    <BannerImage/>
      <Slider movies={movies} />
    </div>
  );
}

export default Netflix;
