import { Link } from "react-router-dom"
import "./Tile.css"

function Tile({ contentType, content, type, icon, iconalt, url }) {
    // TODO: Accessability information 

    return (
        <Link to={url} className="max-sm:pt-5 ">
            <section className="flex flex-wrap max-sm:flex-row max-sm:py-2 max-sm:max-w-xs justify-center border-2 border-black border-solid rounded-md">
                <img src={icon} alt={iconalt} className="max-w-5" />
                <h3 className="px-2">{contentType}</h3>
                <Link to={type} >{content}</Link>
            </section>
        </Link>

    )
}

export default Tile