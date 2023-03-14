import './Game.css';
import Header from "./Header";
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
    const [character1, setCharacter1] = useState(true)
    const [character2, setCharacter2] = useState(true)
    const [character3, setCharacter3] = useState(true)
    const [errorMessage, setErrorMessage] = useState(false)
    const [gameover, setGameover] = useState(false)
    const [score, setScore] = useState(0)

    function handleCoordinates(e) {
        const xCoord = Math.round((e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth) * 100);
        const yCoord = Math.round((e.nativeEvent.offsetY / e.nativeEvent.target.offsetHeight) * 100);
        handleMenu(e)
        setCoords({
            x: xCoord,
            y: yCoord,
        })
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
                foundCharacter(characterName)
                setMenu(false)
                
            } else {
                setErrorMessage(true)
                setMenu(false)
                timeoutErrorMessage()

            }        
        }
        checkClickedCoords();
      }

      function timeoutErrorMessage() {
          const timer = setTimeout(() => {
              setErrorMessage(false)
          }, 3000);
          return () => clearTimeout(timer)
      }


      function foundCharacter(characterName) {
          if(characterName === 'character1'){
              setCharacter1(false)
              setScore(score + 1)
          }
          else if(characterName === 'character2'){
              setCharacter2(false)
              setScore(score + 1)
          }
          else if(characterName === 'character3'){
            setCharacter3(false)
            setScore(score + 1)
        }
        isGameover()
      }

      function isGameover() {
          if(score === 2){
            console.log('gameover')
            setGameover(true)   
          }
      }

    return (
      <div className="game" onClick={(e) => handleCoordinates(e)} >
          <Header />
          {errorMessage && <div className='error-message'><h1>Oops! That's not the character</h1></div>}
        {menu && <div className="menu" style={{
            position: 'absolute',
            left: x,
            top: y,
        }}>
            {character1 && <button className="img1" id="character1" onClick={characterSelected}>
                <div className="box-img1" id="character1"></div>
                <p className="char1" id="character1">Character 1</p>
            </button>}
            {character2 && <button className="img1" id="character2" onClick={characterSelected}>
                <div className="box-img2" id="character2"></div>
                <p className="char2" id="character2">Character 2</p>
            </button>}
            {character3 && <button className="img1" id="character3" onClick={characterSelected}>
                <div className="box-img3" id="character3"></div>
                <p className="char3" id="character3">Character 3</p>
            </button>}
        </div>}
        <div className='credit'><p>Image by Marija Tiurina</p></div>
      </div>
    );
  }
  
  export default Game;
  