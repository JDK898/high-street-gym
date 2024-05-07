import { Link } from "react-router-dom"
import "./Header.css"

function Header() {
    // TODO: Accessability information 
    return (
        <header className="Nav">
            <nav id="Navbar">
                {/* TODO: Make the impage link to the home page */}
                <Link to="/">
                    <img src="images\image-regular.svg" alt="High street gym logo" />
                </Link>
                <Link to="/">Home</Link>
                <Link to="#">Blog</Link>
                <Link to="#">Lessons</Link>
                <Link to="#">About</Link>
                <Link to="#">Sign In</Link>
            </nav>
        </header>
    )
}
export default Header
