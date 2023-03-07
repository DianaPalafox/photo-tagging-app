import Timer from "./Timer";
import './Header.css';

function Header() {
    return (
      <div className="header">
        <div className="header-container">
            <h1 className="title">Search and Find</h1>
            <Timer />
        </div>
      </div>
    );
  }
  
  export default Header;