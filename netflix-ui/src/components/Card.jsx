import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import video from "../assets/video.mp4";
import { IoPlayCircleSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";
import "./Card.css"
import styled from "styled-components";

function Card(props) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate;
  return (
    <div className="main-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${props.movieData.image}`}
        alt="card"
        onClick={() => navigate("/player")}
      />

      {isHovered && (
        <div className="hover">
          <div className="image-video-container">
            <img
              src={`https://image.tmdb.org/t/p/w500${props.movieData.image}`}
              alt="card"
              onClick={() => navigate("/player")}
            />
            <video
              src={video}
              autoPlay={true}
              loop
              muted
              onClick={() => navigate("/player")}
            />
          </div>
          <div className="info-container flex column">
            <h3 className="name" onClick={() => navigate("/player")}>
              {props.movieData.name}
            </h3>
            <div className="icons flex j-between">
              <div className="controls flex">
                <IoPlayCircleSharp
                  title="Play"
                  onClick={() => navigate("/player")}
                />
                <RiThumbUpFill title="Like" />
                <RiThumbDownFill title="Dislike" />
                {props.isLiked ? (
                  <BsCheck
                    title="Remove from List"
                    
                  />
                ) : (
                  <AiOutlinePlus title="Add to my list"/>
                )}
              </div>
              <div className="info">
                <BiChevronDown title="More Info" />
              </div>
            </div>
            <div className="genres flex">
              <ul className="flex">
                {props.movieData.genres.map((genre) => (
                  <li>{genre}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};



export default Card;
