import './Game.css';
import Header from "./Header";
import React from "react";
import { useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import ConnectToDatabase from '../firebase';
import firstCharacter from './images/img1.jpeg'
import secondCharacter from './images/img2.jpeg'
import thirdCharacter from './images/img3.jpeg'
import characterOne from './images/img1.1.jpeg'
import characterTwo from './images/img2.2.jpeg'
import characterThree from './images/img3.3.jpeg'
import ContextMenu from './ContextMenu';


const db = ConnectToDatabase();

function Game({ img, id }) {
    const [menu, setMenu] = useState(false)
    const [board1, setBoard1] = useState(false)
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
        console.log(xCoord, yCoord)
    }

    function pickBoard(e) {
        if(e.target.id === 'board1'){
            setBoard1(true);
        }
        else if(e.target.id === 'board2'){
            setBoard1(false);
        }

    }

    function handleMenu(e){
        e.nativeEvent.offsetX + 130 > window.innerWidth ? setX(`${window.innerWidth - 100}px`) : setX(e.nativeEvent.offsetX);
        e.nativeEvent.offsetY + 150 > window.innerHeight ? setY(`${window.innerHeight - 200}px`) : setY(e.nativeEvent.offsetY)
        setMenu(prevMenu => !prevMenu);
    }

    function getCharCoordData(collection, characterName) {
        const docRef = doc(db, `${collection}`, `${characterName}`);
        console.log(collection)
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
        let charCoordData;
        board1 ? charCoordData = getCharCoordData('coordenadas', characterName) : 
        charCoordData = getCharCoordData('coordenadas2', characterName)
        

        const checkClickedCoords = async () => {
            const charCoords = await charCoordData;
            if(
                (charCoords.x === coords.x || charCoords.x + 1 === coords.x ||
                charCoords.x - 1 === coords.x) && (charCoords.y === coords.y || 
                charCoords.y + 1 === coords.y || charCoords.y - 1 === coords.y)
            ){
                foundCharacter(characterName)
                console.log('found')
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
            setGameover(true)   
          }
      }

    return (
      <div className="game" id={id} onMouseMove={(e) => pickBoard(e)} onClick={(e) => handleCoordinates(e)} style={{backgroundImage: `url(${img})`}}>
          {board1 ? <Header img1={firstCharacter} img2={secondCharacter} img3={thirdCharacter}/> :  
          <Header img1={characterOne} img2={characterTwo} img3={characterThree}/> }
          {errorMessage && <div className='error-message'><h1>Oops! That's not the character</h1></div>}
        {board1 ? <ContextMenu 
        x={x} y={y} 
        characterSelected={(e) => characterSelected(e)}
        character1={character1}
        character2={character2}
        character3={character3}
        showMenu={menu}
        img1={firstCharacter}
        img2={secondCharacter}
        img3={thirdCharacter}
        /> : 
        <ContextMenu 
        x={x} y={y} 
        characterSelected={(e) => characterSelected(e)}
        character1={character1}
        character2={character2}
        character3={character3}
        showMenu={menu}
        img1={characterOne}
        img2={characterTwo}
        img3={characterThree}
        />} 
        <div className='credit'><p>Image by Marija Tiurina</p></div>
      </div>
    );
  }
  
  export default Game;
  