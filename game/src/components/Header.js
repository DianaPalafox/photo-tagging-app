import Timer from "./Timer";
import './assets/Header.css';
import { Link } from "react-router-dom";
import TimerContext from './context/Timer';
import React, { useContext } from 'react'

function Header({ img1, img2, img3}) {
  const { reset } = useContext(TimerContext);

    return (
      <header className="header">
        <div className="header-container">
            <Link to='/'>
              <h1 className="title" onClick={() => reset()}>Search and Find</h1>
            </Link>
            <div className="characters">
                <div className="character1" style={{backgroundImage: `url(${img1})`}}></div>
                <div className="character2" style={{backgroundImage: `url(${img2})`}}></div>
                <div className="character3" style={{backgroundImage: `url(${img3})`}}></div>
            </div>
            <Timer />
        </div>
      </header>
    );
  }
  
  export default Header;