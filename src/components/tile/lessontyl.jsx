import { Link } from "react-router-dom"
import "./lessontyl.css"


function Classes({ ClassType, description, Classlink}) {
    // TODO: Accessability information 

    return (
        <Link to={Classlink}>
            <section className="max-w-80 p-15 m-4 border-solid border-black border-2 rounded-md min-w-20">
                <h1 className="text-3xl">{ClassType}</h1>
                <img src="https://picsum.photos/100/100" alt="stock image" className="" />
                <p className="">
                    {description}
                </p>
                <input type="checkbox" name="booked" id="" />
            </section>
        </Link>

    )
}

export default Classes