// import { Link } from "react-router-dom"
import "./lessontyl.css"


function Classes({ ClassType, description }) {
    // TODO: Accessability information 

    return (
        <section >
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