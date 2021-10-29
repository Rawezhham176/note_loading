import { useState, useRef, useEffect } from "react";
import raw from '../img/raw.jpg'
import facebook from '../icon/facebook-square-brands.svg'
import instagram from "../icon/instagram-brands.svg"
import linkedIn from "../icon/linkedin-brands.svg"
import xing from "../icon/xing-brands.svg"
import email from "../icon/at-solid.svg"
import List from '../components/List'
import "../css/contact.css"
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "../components/Header";
import Background from "../components/Background";
import people from '../video/People-84973.mp4'
import Social from "../components/social_media";


const Contact = () => { 
    
    const [showSocial, setShowSocial] = useState(true)
    const [MenuBack, setMenuBack] = useState(false)

   
    return (
        <>
        <Header />
           <div style={{
            display: MenuBack ? "" : "none",
            width: "100%",
            position: "absolute",
            height: "100%",
            top: "0%",
            zIndex: "1000",
            backgroundColor: "rgba(0,0,0,0.8)",
            transitionTimingFunction: "3s"
            }} onClick={() => {
                if(MenuBack){
                    setMenuBack(false)
                }
            }}> 
                  
                    
            <Social />
                    
                
            </div>

        <video autoPlay loop muted className="video">
            <source src={people} type="video/mp4" />
        </video>
       

       <div className="aboutImage" style={{display: !showSocial ? "none": ""}}>
           <img src={raw} alt="rawezh" className="rawezh_img" onClick={() => {
               if(showSocial){
                setMenuBack(true) 
               } else {
                   setShowSocial(true)
               }
           }}/>
           </div> 
        <div className="back2">
            <h1 className="name">Rawezh Hama</h1>
            <h2 className="name_1">Click on the image to see the contact options</h2>
        </div>
        </>
    )
}

export default Contact