import { Link } from "react-router-dom"
import "./Tile.css"

function Tile({ contentType, content, type, icon, iconalt }) {
    // TODO: Accessability information 

    return (
        <section className="flex flex-nowrap border-2 border-black border-solid rounded-md">
            <img src={icon} alt={iconalt} className="max-w-5"/>
            <h3>{contentType}</h3>
            <Link to={{ type }}>{content}</Link>
        </section>
    )
}

export default Tile