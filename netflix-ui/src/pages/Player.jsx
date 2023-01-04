import React from "react";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import video from "../assets/video.mp4";
import AnimatedPage from "../utils/AnimatedPage";


  export default function Player() {
    const navigate = useNavigate();
  
    return (
      <AnimatedPage>
      <Container>
        <div className="player">
          <div className="back">
            <BsArrowLeft onClick={() => navigate("/")} />
          </div>
          <video src={video} autoPlay loop controls muted />
        </div>
      </Container>
      </AnimatedPage>
    );
  }
  
  const Container = styled.div`
  transition: 0.3s ease-in-out;
  .player {
    width: 100vw;
    height: 100vh;
    .back {
      position: absolute;
      padding: 2rem;
      z-index: 1;
      svg {
        font-size: 3rem;
        cursor: pointer;
      }
    }
    video {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`;