import { useState, useRef, useEffect } from "react";
import List from '../components/List'
import "../css/home.css"
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./About";
import Header from "../components/Header";
import Background from "../components/Background";
import cava from '../video/Cave-45340.mp4'


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
   
   

    return (
        <>
       <Header />
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
            <div className="prag">
            <h2 className="paragraph">I started the development of a 
                new platform. It should be ready in 
                the next few weeks. I am very curious 
                what you will give me as feedback.
                You can also sign up for the trial 
                version.
            </h2>
            </div>
            <h2 className="buttom">Rawezh Hama</h2>
        </div>
        </>
    )
}

export default Home