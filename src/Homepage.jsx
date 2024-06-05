import "./Homepage.css"
import Header from "./components/Header"
import Tile from "./components/tile/Tile"
import Footer from "./components/Footer"

function Homepage() {
    return (
        // TODO: Accessability information 
        <>
            <Header />
            <div className="spacer"></div>
            <div className="flex justify-between mx-10 flex-wrap max-sm:flex-col">
                <Tile contentType="Ph: " content="70-- --- ---" type={"AS"} url={"#"} icon="src\assets\phone-flip-solid.svg" iconalt="call us at"/>
                <Tile contentType="Email:" content="high.street.gym@emali.com" url={"#"} type={"#"} icon="src\assets\envelope-solid.svg" iconalt="Email us at" /> 
                <Tile contentType="Loaction:" url={"https://www.google.com/maps"} type={"#"} content="Lorem, ipsum." icon="src\assets\map-location-dot-solid.svg" iconalt="Were located at" /> 
                <Tile contentType="Trading hours:" url={"#"} type={"#"} content="Lorem, ipsum dolor." icon="src\assets\business-time-solid.svg" iconalt="Our trading hours are" /> 
            </div>
            <Footer/>

        </>
    )
}

export default Homepage