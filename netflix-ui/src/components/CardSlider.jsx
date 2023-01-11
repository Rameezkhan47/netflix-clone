import React from "react";
import Card from "./Card";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useRef, useState } from "react";
import "./CardSlider.css";
import { positions } from "@mui/system";

function CardSlider(props) {
  const listRef = useRef();
  const [sliderPosition, setSliderPosition] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const handleDirection = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 50;
    console.log("list ref=", listRef.current.getBoundingClientRect())
    if (direction === "left" && sliderPosition > 0) {
      listRef.current.style.transform = `translateX(${235 + distance}px)`;
      setSliderPosition(sliderPosition - 1);
    }
    if (direction === "right" && sliderPosition < 7) {
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
      setSliderPosition(sliderPosition + 1);
    }
  };
  return (
    <div
      className="flex column contain "
      showControls={showControls}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <h1>{props.title}</h1>
      <div className="wrapper">
        <div
          className={`slider-action left ${
            !showControls ? "none" : ""
          } flex j-center a-center`}
        >
          <AiOutlineLeft  onClick={() => handleDirection("left")} />
        </div>

            <div className="slider flex  " ref={listRef}>
              {props.data.map((movie, index) => {
                return <Card movieData={movie} index={index} key={movie.id} />;
              })}
            </div>


        <div
          className={`slider-action right ${
            !showControls ? "none" : ""
          } flex j-center a-center`}
        >
          <AiOutlineRight onClick={() => handleDirection("right")} />
        </div>
      </div>
    </div>
  );
}

export default CardSlider;
