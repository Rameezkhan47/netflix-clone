import React from "react";
import MovieLogo from "../assets/homerlogo.jpg";
import { AiOutlineInfoCircle } from "react-icons/ai";import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import PlayArrowSharpIcon from "@mui/icons-material/PlayArrowSharp";
import "../pages/Netflix.css";

export default function BackgroundImage() {
  const navigate = useNavigate();

  return (
    <div className="hero" >
    <img
      src={
        "https://www.themoviedb.org/t/p/original/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg"
      }
      alt="background"
      className="background-image"
    />
    <div className="container">
      <div className="logo">
        <img className="img" src={MovieLogo} alt="Movie Logo" />
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
  );
}
const Container = styled.div`
height: 100vh;
width: 100vw;
img{
    height:100vh;
    width:100vw;
}
`;