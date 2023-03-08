

function Menu({ coords }) {
    const style = () => {
        return{
            position: 'absolute',
            left: coords.x,
            top: coords.y,
            width: 150,
            height: 80,  
        }
    }
    return(
        <div className="menu" style={style()}>
            <div className="menu-container">
                <button className="img1">Img 1</button>
                <button className="img1">Img 2</button>
                <button className="img1">Img 3</button>
            </div>

        </div>
    )
}

export default Menu;