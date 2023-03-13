import './Game.css';
import React from "react";
import { useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import ConnectToDatabase from '../firebase';

const db = ConnectToDatabase();

function Game() {
    const [menu, setMenu] = useState(false)
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const [coords, setCoords] = useState({x: 0, y: 0});

    function handleCoordinates(e) {
        const xCoord = Math.round((e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth) * 100);
        const yCoord = Math.round((e.nativeEvent.offsetY / e.nativeEvent.target.offsetHeight) * 100);
        handleMenu(e)
        setCoords({
            x: xCoord,
            y: yCoord,
        })
        console.log(coords)
    }

    function handleMenu(e){
        e.nativeEvent.offsetX + 130 > window.innerWidth ? setX(`${window.innerWidth - 140}px`) : setX(e.nativeEvent.offsetX);
        e.nativeEvent.offsetY + 150 > window.innerHeight ? setY(`${window.innerHeight - 280}px`) : setY(e.nativeEvent.offsetY)
        setMenu(prevMenu => !prevMenu);
    }

    function getCharCoordData(characterName) {
        const docRef = doc(db, "coordenadas", `${characterName}`);
        let docSnap;
        const charCoords = (async () => {
          docSnap = await getDoc(docRef);
          let coordData = null;
          if (docSnap.exists()) {
            coordData = docSnap.data();
          }
          return coordData;
        })();
        return charCoords;
      }


      function characterSelected(e) {
        const characterName = e.target.id;
        const charCoordData = getCharCoordData(characterName);

        const checkClickedCoords = async () => {
            const charCoords = await charCoordData;
            if(
                (charCoords.x === coords.x || charCoords.x + 1 === coords.x ||
                charCoords.x - 1 === coords.x) && (charCoords.y === coords.y || 
                charCoords.y + 1 === coords.y || charCoords.y - 1 === coords.y)
            ){
                console.log('found')
                setMenu(false)
            } else {
                console.log('not found')
                setMenu(false)
            }        
        }
        checkClickedCoords();
      }

    return (
      <div className="game" onClick={(e) => handleCoordinates(e)} >
        {menu && <div className="menu" style={{
            position: 'absolute',
            left: x,
            top: y,
        }}>
            <button className="img1" id="character1" onClick={characterSelected}>
                <div className="box-img1" id="character1"></div>
                <p className="char1" id="character1">Character 1</p>
            </button>
            <button className="img1" id="character2" onClick={characterSelected}>
                <div className="box-img2" id="character2"></div>
                <p className="char2" id="character2">Character 2</p>
            </button>
            <button className="img1" id="character3" onClick={characterSelected}>
                <div className="box-img3" id="character3"></div>
                <p className="char3" id="character3">Character 3</p>
            </button>
        </div>}
        <div className='credit'><p>Image by Marija Tiurina</p></div>
      </div>
    );
  }
  
  export default Game;
  