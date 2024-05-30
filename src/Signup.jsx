import { Link } from "react-router-dom"
import Header from "./Header"
import Footer from "./components/Footer.jsx"
import Details from "./components/Forms/Clientforms.jsx"
// import "/Signup.css"

function Signup() {
    return (
        <>
            <Header />
            <section className="mx-10 mt-5 max-md:mx-5">

                <div className="flex flex-row justify-evenly mt-10">
                    <div className="basis-1/3 mr-5 max-md:mr-0">
                        <h1 className="text-3xl">Welcom to the family</h1>
                        <Details inputtype="text" inputname="First Name" inputid="user" />
                        <Details inputtype="text" inputname="Last Name" inputid="user" />
                        <Details inputtype="text" inputname="Username" inputid="user" />
                        <Details inputtype="tel" inputname="Phone Number" inputid="user" />
                        <Details inputtype="email" inputname="email" inputid="user" />
                        <Details inputtype="password" inputname="password" inputid="user" />
                        <div className="Flex space-x-2 ">
                            <button type="submit">Join</button>
                            <Link to={"/Login"}>Back</Link>
                        </div>
                    </div>
                    <div className="basis-1/3 max-md:hidden">
                        <img src="src\assets\image-solid.svg" alt="stock image" className="max-w-sm" />
                    </div>
                </div>


            </section>
            <Footer />

        </>
    )
}

export default Signup