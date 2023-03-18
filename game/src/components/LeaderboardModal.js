import './assets/Modal.css'
import { Link } from "react-router-dom";
import TimerContext from './context/Timer'
import { useContext } from 'react'

function LeaderboardModal({ open, info }){
    const { reset } = useContext(TimerContext);
    if(!open) return null; 

    return(
        <div className='overlay'>
            <div className='leaderboard-container'>
                <h1 className='leaderboars-title'>Leaderboard (top 15)</h1>
                <div className='info-leaderboard'>
                    <p className='info-username'>Username</p>
                    <p>Time (seconds)</p>
                </div>
                {
                info.map((item,i)=>(
                <div className='content'>
                    <p className='username' key={i}>
                        {item.username}
                    </p>
                    <p className='seconds'>
                        {item.seconds}
                    </p>
                </div>   
                    ))
                }
                <div className='restart-btn-container'>
                    <Link to='/'>
                        <button className='restart-btn' onClick={() => reset()}>Restart</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LeaderboardModal