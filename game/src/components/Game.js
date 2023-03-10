import './Game.css';
import React from "react";
import { useState } from "react";
import Menu from './Menu';

function Game() {
    const [menu, setMenu] = useState(false)
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const [coords, setCoords] = useState({x: 0, y: 0});

    function toogleMenu(e) {
        setMenu(prevMenu => !prevMenu);
        e.nativeEvent.offsetX + 130 > window.innerWidth ? setX(`${window.innerWidth - 140}px`) : setX(e.nativeEvent.offsetX);
        e.nativeEvent.offsetY + 150 > window.innerHeight ? setY(`${window.innerHeight - 180}px`) : setY(e.nativeEvent.offsetY)
        setCoords({x:e.nativeEvent.offsetX, y:e.nativeEvent.offsetY})
        console.log(x, y)
    }

    return (
      <div className="game" onClick={(e) => toogleMenu(e)} >
        <Menu x = {x}  y = {y} menu = {menu} coords = {coords}/>
        <div className='credit'><p>Image by Marija Tiurina</p></div>
      </div>
    );
  }
  
  export default Game;
  