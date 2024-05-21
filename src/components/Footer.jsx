import { Link } from "react-router-dom";
import "./Footer.css"

function Footer() {
    return(
        <footer className="flex justify-evenly">
            <div className="border-2 rounded-md border-spacing-2 border-black border-solid flex flex-col flex-wrap items-center p-10 max-h-49">
                <h3 className="text-lg">Group 1</h3>
                <Link>This is a placeholder</Link>
                <Link>This is a placeholder</Link>
                <Link>This is a placeholder</Link>
                <Link>This is a placeholder</Link>
            </div>
            <div className="border-2 rounded-md border-spacing-2 border-black border-solid flex flex-col flex-wrap items-center p-10 max-h-49">
                <h3>Group 2</h3>
                <Link>This is a placeholder</Link>
                <Link>This is a placeholder</Link>
                <Link>This is a placeholder</Link>
                
            </div>
            <div className="border-2 rounded-md border-spacing-2 border-black border-solid flex flex-col flex-wrap items-center p-10 max-h-49">
                <h3>Group 3</h3>
                <Link>This is a placeholder</Link>
                <Link>This is a placeholder</Link>
                <Link>This is a placeholder</Link>
                <Link>This is a placeholder</Link>
                <Link>This is a placeholder</Link>
            </div>
        </footer>
    )
}

export default Footer