import './Game.css';
import React from "react";
import { useState } from "react";
import Menu from './Menu';

function Game() {
    const [menu, setMenu] = useState(false)
    const [coords, setCoords] = useState({x: 0, y: 0});

    function toogleMenu() {
        setMenu(true)
        const timer = setTimeout(() => {
            setMenu(false)
        }, 8000)
        return () => clearTimeout(timer)
    }

      function onMouseDown(e) {
          setCoords({
            x: e.nativeEvent.offsetX, 
            y: e.nativeEvent.offsetY 
          })
          console.log(coords)
      }

    return (
      <div className="game" onClick={toogleMenu} onMouseDown={(e) => onMouseDown(e)}>
        {menu && <Menu coords = {coords} menu = {menu}/>}
        <div className='credit'><p>Image by Marija Tiurina</p></div>
      </div>
    );
  }
  
  export default Game;
  