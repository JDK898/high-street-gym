import { Link } from "react-router-dom"
import "./button.css"

function Btn(btntype, conten, btnlink) {
    return (
        <>
            <Link to={btnlink}>
                <button type={btntype}>{conten}</button>
            </Link>
        </>
    )
}

export default Btn