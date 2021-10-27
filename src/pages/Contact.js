import { useState, useRef, useEffect } from "react";
import bike from '../video/People-84973.mp4'
import raw from '../img/raw.jpg'
import facebook from '../icon/facebook-square-brands.svg'
import instagram from "../icon/instagram-brands.svg"
import linkedIn from "../icon/linkedin-brands.svg"
import xing from "../icon/xing-brands.svg"
import email from "../icon/at-solid.svg"
import List from './List'
import "../contact.css"
import {
  Switch,
  Route,
  Link
} from "react-router-dom";


const Contact = () => {   
   
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

       <div className="aboutImage">
           <img src={raw} alt="rawezh" className="rawezh_img" />
           </div> 

        <div className="back2">
            <h1 className="name">Rawezh Hama</h1>
         
        </div>
        </>
    )
}

export default Contact