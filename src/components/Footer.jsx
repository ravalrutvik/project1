import React from 'react'
import {
    
    AiOutlineGithub,
    AiFillInstagram
 
  } from "react-icons/ai";
function Footer() {
  return (
   <footer>
    <div>
        <h1>TechyStar</h1>
        <p>@all right reserved</p>
    </div>
    <div>
        <h5>follow Us</h5>
        <div>
            <a href="https://instagram.com/rutvikraval008" target={"_blank"} ><AiFillInstagram/> Instagarm</a>
            <a href="https://github.com/ravalrutvik" target={"_blank"}><AiOutlineGithub/>Github</a>
        </div>
    </div>
   </footer>
  )
}

export default Footer