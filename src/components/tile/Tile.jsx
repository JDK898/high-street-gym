import { Link } from "react-router-dom"
import "./Tile.css"

function Tile({ contentType, content, type }) {
    // TODO: Accessability information 

    return (
        <section className="Tile">
            <h3>{contentType}</h3>
            <Link to={{ type }}>{content}</Link>
        </section>
    )
}

export default Tile