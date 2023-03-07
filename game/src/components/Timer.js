import React, { useState, useEffect } from 'react'
import './Header.css';

function Timer() {
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [hours, setHours] = useState(0)

   
    useEffect(() => {
       let timer = setInterval(() => {
            setSeconds(seconds + 1)
            if(seconds=== 59) {
                setMinutes(minutes+1)
                setSeconds(0)
            }else if (minutes === 59){
                setHours(hours+1)
                setMinutes(0)
                setSeconds(0)
            }
        }, 1000)
        return () => clearInterval(timer)

    })


    return (
      <div className="timer">
        <div className="timer-container">
            <div className="timer-box">
                <span>{hours <10 ? '0' + hours : hours}:{minutes < 10 ? '0' + minutes : minutes}:{seconds < 10 ? '0' + seconds : seconds}</span>
            </div>
        </div>
      </div>
    );
  }
  
  export default Timer;