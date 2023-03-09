import './Game.css';
import React from "react";
import { useState } from "react";
import Menu from './Menu';

function Game() {
    const [menu, setMenu] = useState(false)
    const [coords, setCoords] = useState({x: 0, y: 0});

    function toogleMenu(e) {
        setMenu(prevMenu => !prevMenu);
        setCoords({
            x: e.nativeEvent.offsetX, 
            y: e.nativeEvent.offsetY 
        })
    }

    return (
      <div className="game" onClick={(e) => toogleMenu(e)} >
        <Menu coords = {coords} menu = {menu} />
        <div className='credit'><p>Image by Marija Tiurina</p></div>
      </div>
    );
  }
  
  export default Game;
  