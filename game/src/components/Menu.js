

function Menu({ x, y , menu }) {
    const style = () => {
        return{
            position: 'absolute',
            display: menu ? 'flex' : 'none',
            left: x,
            top: y,
        }
    }
    return(
        <div className="menu" style={style()}>
            <button className="img1">
                <div className="box-img1"></div>
                <p className="char1">Character 1</p>
            </button>
            <button className="img1">
                <div className="box-img2"></div>
                <p className="char2">Character 2</p>
            </button>
            <button className="img1">
                <div className="box-img3"></div>
                <p className="char3">Character 3</p>
            </button>
        </div>
    )
}

export default Menu;