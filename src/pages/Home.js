import { useState, useRef, useEffect } from "react";
import cava from '../video/Cave-45340.mp4'
import List from './List'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./About";


const Home = () => {
    const [days, setDays] = useState("00");
    const [hours, setHours] = useState("00");
    const [minutes, setMinuts] = useState("00");
    const [seconds, setSeconds] = useState("00");

    let interval = useRef()

    const startTimer = () => {
        const countDownDate = new Date('Dec 31, 2021 00:00:00').getTime()

        interval = setInterval(() => {
            const now = new Date().getTime()
            const distance = countDownDate - now

            const days = Math.floor(distance / (1000 * 60 * 60 * 24))
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((distance % (1000 * 60)) / 1000)


            if (distance < 0) {
                    clearInterval(interval.current)
            } else {
                setDays(days)
                setHours(hours)
                setMinuts(minutes)
                setSeconds(seconds)
            }
        }, 1000)
    }

    useEffect(() => {
        startTimer()
        return () => {
             clearInterval(interval.current)
        }
    })
   
    const [openMenu, setOpenMenu] = useState(false)
    const [menuBack, setMenuBack] = useState("none")

    const clas = openMenu == true ? "open" : ""
    const MenuBack = openMenu ? true : false



    return (
        <Router>
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
                    <li>Home</li>
                    <li>
                        <List /></li>
                    <li>Contact</li>
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
            <source src={cava} type="video/mp4" />
        </video>
        <div className="back">
        <h1 className="head">We are soon online</h1>
        <div className="timer">
        <span id="days">{days}</span>
        <span>:</span>
        <span id="hours">{hours}</span>
        <span>:</span>
        <span id="minuts">{minutes}</span>
        <span>:</span>
        <span id="seconds">{seconds}</span>
        </div>
            <h2 className="buttom">Rawezh Hama</h2>
            <div className="prag">
            <h2 className="paragraph">I started the development of a 
                new platform. It should be ready in 
                the next few weeks. I am very curious 
                what you will give me as feedback.
                You can also sign up for the trial 
                version.
            </h2>
            </div>
        </div>
        </>
        </Router>
    )
}

export default Home