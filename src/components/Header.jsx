import { Link } from "react-router-dom"
import { onToggleMenu } from "./burgerlogic.js"
// import "./Header.css"

function Header() {
    // TODO: Accessability information 
    // TODO: Colapse to a burger menu for mobile viewports
    return (

        <header className="bg-teal-600">

            <nav className="flex justify-evenly max-sm:flex-col">
                <div className="max-sm:flex-row max-sm:justify-evenly flex">
                    <Link to="/">
                        <img src="images\image-regular.svg" alt="High street gym logo" className="bg-none border-none size-auto min-h-12 pl-1 max-sm:max-h-5" />
                    </Link>

                    <button onclick={onToggleMenu}>
                        <img src="src\assets\bars-solid.svg" alt="burger menu icon" className="bg-none border-none size-auto min-h-12 pl-1 max-sm:max-h-5 hidden max-sm:flex" />
                    </button>
                </div>
                {/* <div className="max-sm:flex-col flex justify-evenly"> */}
                    <Link to="/" className="self-center px-2 py-1 border-2 border-none rounded text-white bg-yellow-500 hover:bg-yellow-600 max-sm:mt-2" id="nav-items" >Home</Link>
                    <Link to="/Blogs" className="self-center px-2 py-1 border-2 border-none rounded text-white bg-yellow-500 hover:bg-yellow-600 max-sm:mt-2" id="nav-items" >Blog</Link>
                    <Link to="/Lessons" className="self-center px-2 py-1 border-2 border-none rounded text-white bg-yellow-500 hover:bg-yellow-600 max-sm:mt-2" id="nav-items" >Lessons</Link>
                    <Link to="/About" className="self-center px-2 py-1 border-2 border-none rounded text-white bg-yellow-500 hover:bg-yellow-600 max-sm:mt-2" id="nav-items" >About</Link>
                    <Link to="/Login" className="min-h-6 min-w-14 flex-nowrap self-center px-2 py-1 border-2 border-none rounded text-white bg-yellow-500 hover:bg-yellow-600 max-sm:mt-2" id="nav-items" >Sign In</Link>
                {/* </div> */}

            </nav>

        </header>
    )
}

{/* <div className="max-sm:flex flex-col">
<Link to="/" className="flex self-center px-2 py-1 border-2 border-none rounded text-white bg-yellow-500 hover:bg-yellow-600 max-sm:mt-2 ">Home</Link>
<Link to="/Blogs" className="flex self-center px-2 py-1 border-2 border-none rounded text-white bg-yellow-500 hover:bg-yellow-600 max-sm:mt-2">Blog</Link>
<Link to="/Lessons" className="flex self-center px-2 py-1 border-2 border-none rounded text-white bg-yellow-500 hover:bg-yellow-600 max-sm:mt-2">Lessons</Link>
<Link to="/About" className="flex self-center px-2 py-1 border-2 border-none rounded text-white bg-yellow-500 hover:bg-yellow-600 max-sm:mt-2">About</Link>
<Link to="/Login" className="min-h-6 min-w-14 flex-nowrap flex self-center px-2 py-1 border-2 border-none rounded text-white bg-yellow-500 hover:bg-yellow-600 max-sm:mt-2">Sign In</Link>
</div> */}

export default Header

