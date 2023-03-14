import '../components/InitialPage.css'

function Card({ img, title }) {
    return (
      <div className="card">
            <h1 className="title-card">{title}</h1>
            <img className="board" src={img} alt='board' />
      </div>
    );
  }
  
  export default Card;
  