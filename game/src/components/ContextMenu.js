
function ContextMenu({x, y, characterSelected, character1, character2, character3, showMenu,
img1, img2, img3}) {
    return(
        <div className="menu" style={{
            position: 'absolute',
            left: x,
            top: y,
            display: showMenu ? 'flex' : 'none' 
        }}>
            {character1 && <button className="menu-btn" id="character1" onClick={characterSelected}>
                <div className="box-img1" id="character1" style={{backgroundImage: `url(${img1})`}}></div>
                <p className="char1" id="character1">Character 1</p>
            </button>}
            {character2 && <button className="menu-btn" id="character2" onClick={characterSelected}>
                <div className="box-img2" id="character2" style={{backgroundImage: `url(${img2})`}}></div>
                <p className="char2" id="character2">Character 2</p>
            </button>}
            {character3 && <button className="menu-btn" id="character3" onClick={characterSelected}>
                <div className="box-img3" id="character3" style={{backgroundImage: `url(${img3})`}}></div>
                <p className="char3" id="character3">Character 3</p>
            </button>}
        </div>
    )
}

export default ContextMenu;