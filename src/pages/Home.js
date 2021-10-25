import { useState, useRef, useEffect } from "react";

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
        <div className="timer">
        <div className="back">
        <h1 className="head">We are soon online</h1>
        <span id="days">{days}</span>
        <span>:</span>
        <span id="hours">{hours}</span>
        <span>:</span>
        <span id="minuts">{minutes}</span>
        <span>:</span>
        <span id="seconds">{seconds}</span>
        <h2 className="buttom">Rawezh Hama</h2>
        </div>
        </div>
    )
}

export default Home