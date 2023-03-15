import Timer from "./Timer";
import './Header.css';
import { Link } from "react-router-dom";

function Header({ img1, img2, img3}) {
    return (
      <header className="header">
        <div className="header-container">
            <Link to='/'>
              <h1 className="title">Search and Find</h1>
            </Link>
            <div className="characters">
                <div className="character1" style={{backgroundImage: `url(${img1})`}}></div>
                <div className="character2" style={{backgroundImage: `url(${img2})`}}></div>
                <div className="character3" style={{backgroundImage: `url(${img3})`}}></div>
            </div>
            <Timer />
        </div>
      </header>
    );
  }
  
  export default Header;