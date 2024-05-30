import { Link } from "react-router-dom";

function Footer() {
    return(
        <footer className="flex justify-evenly mt-10 max-md:flex-wrap">
            <div className="border-2 rounded-md border-spacing-2 border-black border-solid flex flex-col flex-wrap items-center p-5 max-h-48 min-w-48">
                <h3 className="text-lg">Group 1</h3>
                <Link to="/Dashbord">Temp link to Dashbord</Link>
                <Link to="#">This is a placeholder</Link>
                <Link to="#">This is a placeholder</Link>
                <Link to="#">This is a placeholder</Link>
            </div>
            <div className="border-2 rounded-md border-spacing-2 border-black border-solid flex flex-col flex-wrap items-center p-5 max-h-48 min-w-48">
                <h3>Group 2</h3>
                <Link to="#">This is a placeholder</Link>
                <Link to="#">This is a placeholder</Link>
                <Link to="#">This is a placeholder</Link>
                
            </div>
            <div className="border-2 rounded-md border-spacing-2 border-black border-solid flex flex-col flex-wrap items-center p-5 max-h-48 min-w-48">
                <h3>Group 3</h3>
                <Link to="#">This is a placeholder</Link>
                <Link to="#">This is a placeholder</Link>
                <Link to="#">This is a placeholder</Link>
                <Link to="#">This is a placeholder</Link>
                <Link to="#">This is a placeholder</Link>
            </div>
            <div className="border-2 rounded-md border-spacing-2 border-black border-solid flex flex-col flex-wrap items-center p-5 max-h-48 min-w-48">
                <h3 className="text-lg">Group 4</h3>
                <Link to="#">Lorem ipsum dolor sit.</Link>
                <Link to="#">This is a placeholder</Link>
                <Link to="#">This is a placeholder</Link>
                <Link to="#">This is a placeholder</Link>
            </div>
        </footer>
    )
}

export default Footer