import { Link } from "react-router-dom"

function Header() {
    // TODO: Accessability information 
    return (
        <header className="bg-teal-600">
            <nav className="flex justify-evenly">
                <Link to="/">
                    <img src="images\image-regular.svg" alt="High street gym logo" className="bg-none border-none size-auto min-h-12 pl-1" />
                </Link>
                <Link to="/" className="flex self-center px-2 py-1 border-2 border-none rounded text-white bg-yellow-500 hover:bg-yellow-600">Home</Link>
                <Link to="/Blogs" className="flex self-center px-2 py-1 border-2 border-none rounded text-white bg-yellow-500 hover:bg-yellow-600">Blog</Link>
                <Link to="/Lessons" className="flex self-center px-2 py-1 border-2 border-none rounded text-white bg-yellow-500 hover:bg-yellow-600">Lessons</Link>
                <Link to="/About" className="flex self-center px-2 py-1 border-2 border-none rounded text-white bg-yellow-500 hover:bg-yellow-600">About</Link>
                <Link to="/Login" className=" min-h-6 min-w-14 flex-nowrap flex self-center px-2 py-1 border-2 border-none rounded text-white bg-yellow-500 hover:bg-yellow-600">Sign In</Link>
            </nav>
        </header>
    )
}
export default Header
