import React, { useState } from 'react'
import  Navbar from "../components/Navbar";
import BackgroundImage from '../assets/home.jpg';
import MovieLogo from '../assets/homeTitle.jpg';
import{FaPlay} from "react-icons/fa";
import { AirOutlinedInfoCircle } from 'react-icons/ai';




export default function () {
  const [isScrolled, setIsScrolled]= useState(false)
  window.onscroll = () =>{
    setIsScrolled(window.pageYOffset===0?false:true);
    return()=>(window.onscroll = null)
  };
  return (
<>
<Navbar isScrolled={isScrolled} />
<div className='hero'>
  

</div>
</>
  )
}
