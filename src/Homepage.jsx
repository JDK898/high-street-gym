import "./Homepage.css"
import Header from "./Header"
import Tile from "./components/tile/Tile"

function Homepage() {
    return (
        // TODO: Accessability information 
        <>
            <Header />
            <div className="spacer"></div>
            <div className="info">
                <Tile contentType="Ph:" content="70-- --- ---" type="AS" />
                <Tile contentType="Email:" content="adlkfahsdfp dsaadsfh d" type="AS" />
                <Tile contentType="Loaction" type="" content="asdfhasdf" />
                <Tile contentType="Trading hours" type="" content="ashdasd" />
            </div>

        </>
    )
}

export default Homepage