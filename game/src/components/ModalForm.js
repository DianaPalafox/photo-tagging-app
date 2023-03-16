import './Modal.css'
import { useState } from 'react'
import { addDoc,collection } from 'firebase/firestore'
import ConnectToDatabase from '../firebase'
import ReactDom from 'react-dom'
import { Link } from "react-router-dom";

const db = ConnectToDatabase();
function ModalForm() {
    const [input, setInput] = useState('')

    const addInput = async(e) => {
        e.preventDefault()
        try{
            const docRef = await addDoc(collection(db, 'leaderboard'), {
                input: input,
            });
            console.log('Document written with ID: ', docRef.id);
        }catch(e){
            console.error('Error adding document: ', e);
        }

    }

    return ReactDom.createPortal(
        <div className="overlay">
            <div className="modal-container">
                <h1 className='time-finished'>You finished in</h1>
                <h2 className='score-info'>Submit your score on the global leaderboard!</h2>
                <div className='input-container'>
                    <label>Username</label>
                    <input 
                        type='text'
                        onChange={(e) => setInput(e.target.value)}
                    />
                </div>
                <div className='btn-container'>
                  <Link to='/'>
                    <button type='button' className='btn'>
                        Cancel
                    </button>
                  </Link>
                    <button type='submit' className='btn' onClick={addInput}>
                        Submit
                    </button>
                </div>
            </div>
        </div>,
        document.getElementById('portal')
    )
}

export default ModalForm