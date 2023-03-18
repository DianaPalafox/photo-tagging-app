import './assets/Modal.css'
import { useState, useContext, useEffect } from 'react'
import { addDoc, collection, getDocs, where, limit, orderBy, query } from 'firebase/firestore'
import ConnectToDatabase from '../firebase'
import ReactDom from 'react-dom'
import { Link } from "react-router-dom";
import TimerContext from './context/Timer'
import LeaderboardModal from './LeaderboardModal'

const db = ConnectToDatabase();
function ModalForm() {
    const { minutes, seconds, reset } = useContext(TimerContext);
    const [username, setUsername] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const [info, setInfo] = useState([]);

    const addInput = async(e) => {
        e.preventDefault()
        try{
            const docRef = await addDoc(collection(db, 'leaderboard'), {
                username: username,
                minutes: minutes,
                seconds: seconds,
            });
            console.log('Document written with ID: ', docRef.id);
        }catch(e){
            console.error('Error adding document: ', e);
        }
        setIsOpen(true)
        setUsername('')
        
    }
    
    const q = query(collection(db, 'leaderboard'), where("minutes", "==", 0), orderBy("seconds", "asc"), limit(15))

    const fetchPost = async () => {
        await getDocs(q)
            .then((querySnapshot)=>{              
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setInfo(newData);                
            })
    }
   
    useEffect(()=>{
        fetchPost();
    }, [])


    return ReactDom.createPortal(
        <div className="overlay">
            <div className="modal-container">
                <h1 className='time-finished'>You finished in {minutes} minutes and {seconds} seconds</h1>
                <h2 className='score-info'>Submit your score on the global leaderboard!</h2>
                <form className='input-container'>
                    <label>Username</label>
                    <input 
                        type='text'
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </form>
                <div className='btn-container'>
                  <Link to='/'>
                    <button type='button' className='btn' onClick={() => reset()} >
                        Cancel
                    </button>
                  </Link>
                    <button type='submit' className='btn' onClick={addInput}>
                        Submit
                    </button>
                </div>
            </div>
            <LeaderboardModal open={isOpen} info={info}/>
        </div>,
        document.getElementById('portal')
    )
}

export default ModalForm