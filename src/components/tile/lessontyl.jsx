// import { Link } from "react-router-dom"
import "./lessontyl.css"


function Classes({ ClassType, description }) {
    // TODO: Accessability information 

    return (
        <section className="max-w-80 p-15 border-solid border-black border-2 rounded-md min-w-20">
            <h1 className="text-3xl">{ClassType}</h1>
            <img src="https://picsum.photos/100/100" alt="stock image" className="" />
            <p className="">
                {description}
            </p>
            <input type="checkbox" name="booked" id="" />

        </section>
    )
}

export default Classes