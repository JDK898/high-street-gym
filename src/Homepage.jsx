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
                <Tile contentType="A" type="" content="" />
                <Tile contentType="B" type="" content="" />
            </div>

        </>
    )
}

export default Homepage