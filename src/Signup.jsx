import { Link } from "react-router-dom"
import Header from "./Header"
import Details from "./components/Forms/Clientforms.jsx"
// import "/Signup.css"

function Signup() {
    return (
        <>
            <Header />
            <h1 className="text-3xl">Welcom to the family</h1>
            <img src="https://picsum.photos/400/400" alt="stock image" className="" />
            <div>
                <Details inputtype="text" inputname="First Name" inputid="user" />
                <Details inputtype="text" inputname="Last Name" inputid="user" />
                <Details inputtype="text" inputname="Username" inputid="user" />
                <Details inputtype="tel" inputname="Phone Number" inputid="user" />
                <Details inputtype="email" inputname="email" inputid="user" />
                <Details inputtype="password" inputname="password" inputid="user" />
            </div>
            <div className="Flex space-x-2 ">
                <button type="submit">Join</button>
                <Link to={"/Login"}>Back</Link>
            </div>

        </>
    )
}

export default Signup