import React from "react";
import CardSlider from "./CardSlider";

function Slider(props) {
  const getMoviesFromRange = (from, to) => {
    return props.movies.slice(from, to);
  };
  return (
    <div>
      <CardSlider
        title="Binge-worthy US TV Thrillers & Mysteries"
        data={getMoviesFromRange(0, 12)}
      />
      <CardSlider title="Trending Now" data={getMoviesFromRange(12, 24)} />
      <CardSlider title="30-Minute Laughs" data={getMoviesFromRange(24, 36)} />
      <CardSlider
        title="Award Winning Bingeworthy TV Shows"
        data={getMoviesFromRange(36, 48)}
      />
      <CardSlider
        title="Popular on Netflix"
        data={getMoviesFromRange(50, 62)}
      />
      <CardSlider title="New Releases" data={getMoviesFromRange(58, 70)} />
    </div>
  );
}

export default Slider;
