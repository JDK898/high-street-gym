import { Link } from "react-router-dom"
import { onToggleMenu } from "./burgerlogic.js"
// import "./Header.css"

function Header() {
    // TODO: Accessability information 
    // TODO: Colapse to a burger menu for mobile viewports
    return (

        <header className="bg-teal-600">

            <nav className="flex justify-evenly max-sm:flex-col w-full">
                    <div className="max-sm:flex-row max-sm:justify-evenly flex max-sm:w-full">
                        <Link to="/" className="ml-10 max-sm:-ml-10">
                            <img src="images\image-regular.svg" alt="High street gym logo" className="bg-none border-none size-auto min-h-12 pl-1 max-sm:max-h-5" />
                        </Link>

                        <button onClick={onToggleMenu}>
                            <img src="src\assets\bars-solid.svg" alt="burger menu icon" className="bg-none border-none size-auto min-h-12 pl-1 max-sm:max-h-5 hidden max-sm:flex" />
                        </button>
                    </div>
                    <nav id="nav-items" className="max-sm:hidden flex justify-evenly max-sm:flex-col w-full max-sm:-ml-5 max-sm:pb-5">
                        <Link to="/" className="self-center px-2 py-1 border-2 border-none rounded text-white bg-yellow-500 hover:bg-yellow-600 max-sm:mt-2">Home</Link>
                        <Link to="/Blogs" className="self-center px-2 py-1 border-2 border-none rounded text-white bg-yellow-500 hover:bg-yellow-600 max-sm:mt-2">Blog</Link>
                        <Link to="/Lessons" className="self-center px-2 py-1 border-2 border-none rounded text-white bg-yellow-500 hover:bg-yellow-600 max-sm:mt-2">Lessons</Link>
                        <Link to="/About" className="self-center px-2 py-1 border-2 border-none rounded text-white bg-yellow-500 hover:bg-yellow-600 max-sm:mt-2">About</Link>
                        <Link to="/Login" className="min-h-6 min-w-14 flex-nowrap self-center px-2 py-1 border-2 border-none rounded text-white bg-yellow-500 hover:bg-yellow-600 max-sm:mt-2">Sign In</Link>
                    </nav>
            </nav>

        </header>
    )
}


export default Header

