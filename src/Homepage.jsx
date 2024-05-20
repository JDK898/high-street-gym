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
                <Tile contentType="Ph: " content=" 70-- --- ---" type="AS" />
                <Tile contentType="Email: " content=" high.street.gym@emali.com" type="AS" /> 
                <Tile contentType="Loaction:" type="" content=" Lorem, ipsum." /> 
                <Tile contentType="Trading hours:" type="" content="Lorem, ipsum dolor." /> 
            </div>

        </>
    )
}

export default Homepage