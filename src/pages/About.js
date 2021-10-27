import { useState, useRef, useEffect } from "react";
import bike from '../video/Bike-72566.mp4'
import List from './List'
import "../about.css"
import {
  Switch,
  Route,
  Link
} from "react-router-dom";


const About = () => {   
   
    const [openMenu, setOpenMenu] = useState(false)
    const [menuBack, setMenuBack] = useState("none")

    const clas = openMenu == true ? "open" : ""
    const MenuBack = openMenu ? true : false



    return (
        <>
        <div>
             <div style={{
            display: MenuBack ? "block" : menuBack,
            width: "100%",
            position: "absolute",
            height: "100%",
            float: "right",
            left: "50",
            right: "80",
            zIndex: "100",
            backgroundColor: "rgba(0,0,0,0.8)",
            }} onClick={() => {
                if(MenuBack){
                    setOpenMenu(false)
                }
            } }> 
                  <ul className="menuList">
                    
                    <li><List /></li>
                    
                </ul>
            </div>
            
        </div>
        <header>
            <h1 className="headline">Future</h1>
            <div className={`${clas} menu_btn`} onClick={() => {
                if(openMenu){
                    setOpenMenu(false)
                } else {
                    setOpenMenu(true)
                }
            }}>
                <div className="menu_burge"></div>
            </div>
        </header>
        
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