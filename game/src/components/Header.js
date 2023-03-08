import Timer from "./Timer";
import './Header.css';

function Header() {
    return (
      <div className="header">
        <div className="header-container">
            <h1 className="title">Search and Find</h1>
            <div className="characters">
                <div className="character1"></div>
                <div className="character2"></div>
                <div className="character3"></div>
            </div>
            <Timer />
        </div>
      </div>
    );
  }
  
  export default Header;