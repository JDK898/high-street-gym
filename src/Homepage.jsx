import "./Homepage.css"
import Header from "./Header"
import Tile from "./components/tile/Tile"
import Footer from "./components/Footer"

function Homepage() {
    return (
        // TODO: Accessability information 
        <>
            <Header />
            <div className="spacer"></div>
            <div className="info flex justify-between ml-10 mr-10 flex-wrap">
                <Tile contentType="Ph: " content=" 70-- --- ---" type="AS" />
                <Tile contentType="Email: " content=" high.street.gym@emali.com" type="AS" /> 
                <Tile contentType="Loaction:" type="" content=" Lorem, ipsum." /> 
                <Tile contentType="Trading hours:" type="" content="Lorem, ipsum dolor." /> 
            </div>
            <Footer/>

        </>
    )
}

export default Homepage