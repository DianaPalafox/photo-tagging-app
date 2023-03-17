import React, { useContext } from 'react'
import './assets/Header.css';
import TimerContext from './context/Timer';

function Timer() {
    const { seconds, minutes, hours } = useContext(TimerContext);

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