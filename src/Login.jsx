import { Link } from "react-router-dom"
import Header from "./Header.jsx"
import Footer from "./components/Footer.jsx"
import Details from "./components/Forms/Clientforms.jsx"
import "./Login.css"




function Login() {
    return (
        <>
            <Header />
            <section>
                <div className="mx-10 mt-5 max-md:mx-5">
                    <div className="flex flex-row justify-evenly mt-10">
                        <div className="basis-1/3 mr-5 max-md:mr-0">
                            <h1 className="text-3xl">Welcom Back</h1>
                            <Details inputtype="text" inputname="Username" inputid="user" />
                            <Details inputtype="password" inputname="Password" inputid="PW" />
                            <div className="Flex space-x-2 ">
                                <button type="submit" className="border-2 border-solid border-black border-r-2">Login</button>
                                <Link to={"/Signup"}>Join Now!</Link>
                            </div>
                        </div>
                        <div className="basis-1/3 max-md:hidden">

                            <img src="src\assets\image-solid.svg" alt="stock image" className="max-w-sm" />
                        </div>

                    </div>
                    {/* TODO: add Login and join btn */}
                    {/* <input type="button" value="" content="Login"/> */}
                </div>
            </section>

            <Footer />



            {/* <Link href="#">Reset Password</Link> */}
        </>
    )
}


export default Login