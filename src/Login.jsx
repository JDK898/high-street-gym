import { Link } from "react-router-dom"
import Header from "./Header.jsx"
import Details from "./components/Forms/Clientforms.jsx"
import "./Login.css"



function Login() {
    return (
        <>
            <Header />
            <div className="ml-6 mr-6">
                <h1 className="text-3xl">Welcom Back</h1>
                <img src="https://picsum.photos/400/400" alt="stock image" className="" />
                {/* TODO: fix invisable sytling problem */}
                <Details inputtype="text" inputname="Username" inputid="user" />
                <Details inputtype="password" inputname="Password" inputid="PW" />
                {/* TODO: add Login and join btn */}
                {/* <input type="button" value="" content="Login"/> */}
                <div className="Flex space-x-2 ">
                    <button type="submit" className="border-2 border-solid border-black border-r-2">Login</button>
                    <Link to={"/Signup"}>Join Now!</Link>
                </div>
            </div>



            {/* <Link href="#">Reset Password</Link> */}
        </>
    )
}


export default Login