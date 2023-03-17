import '../components/assets/InitialPage.css'

function Card({ img, title, id }) {
    return (
      <div className="card" id={id}>
            <h1 className="title-card">{title}</h1>
            <img className="board" src={img} alt='board' />
      </div>
    );
  }
  
  export default Card;
  