import React from "react";
import CardSlider from "./CardSlider";

function Slider(props) {
  const getMoviesFromRange = (from, to) => {
    return props.movies.slice(from, to);
  };
  return (
    <div>
      <CardSlider
        title="Binge-worthy US TV Thrillers &#x26 Mysteries"
        data={getMoviesFromRange(0, 10)}
      />
      <CardSlider title="Trending Now" data={getMoviesFromRange(10, 20)} />
      <CardSlider title="30-Minute Laughs" data={getMoviesFromRange(20, 30)} />
      <CardSlider
        title="Award Winning Bingeworthy TV Shows"
        data={getMoviesFromRange(30, 40)}
      />
      <CardSlider
        title="Popular on Netflix"
        data={getMoviesFromRange(40, 50)}
      />
      <CardSlider title="New Releases" data={getMoviesFromRange(50, 60)} />
    </div>
  );
}

export default Slider;
