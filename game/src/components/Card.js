import '../components/assets/InitialPage.css'
import TimerContext from './context/Timer';
import React, { useContext } from 'react'

function Card({ img, title, id }) {
  const { setIsActive } = useContext(TimerContext);
    return (
      <div className="card" id={id} onClick={() => setIsActive(true)}>
            <h1 className="title-card">{title}</h1>
            <img className="board" src={img} alt='board' />
      </div>
    );
  }
  
  export default Card;
  