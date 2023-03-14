import Timer from "./Timer";
import './Header.css';
import { Link } from "react-router-dom";

function Header() {
    return (
      <header className="header">
        <div className="header-container">
            <Link to='/'>
              <h1 className="title">Search and Find</h1>
            </Link>
            <div className="characters">
                <div className="character1"></div>
                <div className="character2"></div>
                <div className="character3"></div>
            </div>
            <Timer />
        </div>
      </header>
    );
  }
  
  export default Header;