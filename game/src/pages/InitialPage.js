import Card from "../components/Card";
import board1 from "../components/images/board1.jpeg"
import board2 from "../components/images/board2.jpeg"
import '../components/InitialPage.css'
import { Link } from "react-router-dom";

function InitialPage() {
    return (
      <div className="initial-page">
        <header className="initalpage-header">
            <h1>Search and Find</h1>
        </header>
        <div className="card-container">
            <Link to='/board1'>
                <Card title={'Entertainment Valley'} img={board1}/>
            </Link>
            <Link to='/board2'>
                <Card title={'Tech City'} img={board2}/>
            </Link>
        </div>
        
      </div>
    );
  }
  
  export default InitialPage;
  