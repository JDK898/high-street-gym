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
                <Link to="/Blogs">Blog</Link>
                <Link to="/Lessons">Lessons</Link>
                <Link to="/About">About</Link>
                <Link to="/Login">Sign In</Link>
            </nav>
        </header>
    )
}
export default Header
