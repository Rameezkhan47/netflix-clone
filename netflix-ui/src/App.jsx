import React from "react";
import { Route, Routes, useLocation} from 'react-router-dom'
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Netflix from "./pages/Netflix";
import SignupRegistered from "./pages/SignupRegistered";
import SignupRegForm from "./pages/SignupRegForm";
import Player from "./pages/Player";
import MoviePage from "./pages/MoviePage"
import TVShows from "./pages/TVShows"
import { AnimatePresence } from "framer-motion";
import UserLiked from "./pages/UserLiked";





function App() {
  const location = useLocation();//framer motion library is unable to recognize
 // which page you are in based on the route by not getting this info from
 //react router dom. So you need to acces the location for this to work and
 // pass it to

  return (
    <AnimatePresence mode="wait">
    <Routes key={location.pathname} location={location}>
      <Route exact path="login" element={<Login/>}/>
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/signup/registered" element={<SignupRegistered />} />
      <Route exact path="/signup/regform" element={<SignupRegForm />} />
      <Route exact path="/player" element={<Player />} />
      <Route exact path="/" element={<Netflix/>}/>
      <Route exact path="/movies" element={<MoviePage />} />
      <Route exact path="/tv" element={<TVShows />} />
      <Route exact path="/mylist" element={<UserLiked />} />



    </Routes>
    </AnimatePresence>

  );
}

export default App;
