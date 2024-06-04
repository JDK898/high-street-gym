import { Link } from "react-router-dom"
import Header from "./components/Header.jsx"
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
                            <div className="mt-2">
                                <Details inputtype="text" inputname="Username" inputid="user" />
                            </div>
                            <div className="mt-2">
                                <Details inputtype="password" inputname="Password" inputid="PW" />
                            </div>
                            <div className="Flex space-x-2 mt-4">
                                <button type="submit" className="border-2 border-solid border-black rounded-sm p-1">Login</button>
                                <Link to={"/Signup"} className="border-2 border-solid border-black rounded-sm p-1">Join Now!</Link>
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