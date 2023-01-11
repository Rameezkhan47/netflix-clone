import React, { useEffect, useState } from "react";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";
import Slider from "../components/Slider";
import PlayArrowSharpIcon from "@mui/icons-material/PlayArrowSharp";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, fetchMovies } from "../store";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import SelectGenres from "../components/SelectGenres";
import NotAvailable from "../components/NotAvailable";
import BackgroundImage from "../components/BackgroundImage";

export default function TVShows() {
  const dispatch = useDispatch();
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  const movies = useSelector((state) => state.netflix.movies);
  const genres = useSelector((state) => state.netflix.genres);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();



  useEffect(() => {
    dispatch(getGenres());
  }, []);

  useEffect(() => {
    if (genresLoaded) {
      dispatch(fetchMovies({ genres, type: "tv" }));
    } //load content when the page will first render
  }, [genresLoaded]);
  // onAuthStateChanged(firebaseAuth, (currentUser) => {
  //   if (currentUser) navigate("/");
  // });
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <Container>
    <div className="navbar">
      <Navbar isScrolled={isScrolled} />
    </div>
    <BackgroundImage/>
    <div className="data">
      <SelectGenres genres={genres} type="tv" />
      {movies.length ? <Slider movies={movies} /> : <NotAvailable />}
    </div>
  </Container>
  );
}
const Container = styled.div`
  .data {
    margin-top: 1rem;
    .not-available {
      text-align: center;
      color: white;
      margin-top: 4rem;
    }
  }
`;
