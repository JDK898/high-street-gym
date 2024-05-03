import { Link } from "react-router-dom"
import "./Tile.css"

function Tile (contyp,detls,typ) {

    return (
        <section>
            <h3>{contyp}</h3>
            <Link to={typ}>{detls}</Link>

        </section>
    )
}

export default Tile