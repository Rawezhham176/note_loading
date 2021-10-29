import { useState, useRef, useEffect } from "react";

import List from '../components/List'
import "../css/about.css"
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "../components/Header";
import Background from "../components/Background";
import bike from '../video/Bike-72566.mp4'


const About = () => {   
   
    const [openMenu, setOpenMenu] = useState(false)
    const [menuBack, setMenuBack] = useState("none")

    const clas = openMenu == true ? "open" : ""
    const MenuBack = openMenu ? true : false



    return (
        <>
        <Header />
        <video autoPlay loop muted className="video">
            <source src={bike} type="video/mp4" />
        </video>
        
    
        <div className="back1">
            <h2 className="buttom"></h2>
            <div className="prag1">
            <h2 className="paragraph1">This project will be my first project that 
                                      I would like to share with others. I am currently 
                                      developing the project from scratch. I am very 
                                      excited to see the results. I will share the future step 
                                      of the project with you. A few days before the release, 
                                      I will share what the platform will be about. If you want 
                                      to be the first person to use the platform, send me 
                                      an email or write me on my social accounts :) 
            </h2>
            </div>
        </div>
        </>
    )
}

export default About