import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Netflix from "./pages/Netflix";
import SignupRegistered from "./pages/SignupRegistered";
import SignupRegForm from "./pages/SignupRegForm";



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="login" element={<Login/>}/>
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/signup/registered" element={<SignupRegistered />} />
      <Route exact path="/signup/regform" element={<SignupRegForm />} />
            <Route exact path="/" element={<Netflix/>}/>


    </Routes>
    </BrowserRouter>

  );
}

export default App;