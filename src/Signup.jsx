import { Link } from "react-router-dom"
import Header from "./components/Header.jsx"
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
                        <div className="mt-2">
                            <Details inputtype="text" inputname="First Name" inputid="user" />
                        </div>
                        <div className="mt-2">
                            <Details inputtype="text" inputname="Last Name" inputid="user" />
                        </div>
                        <div className="mt-2">
                            <Details inputtype="text" inputname="Username" inputid="user" />
                        </div>
                        <div className="mt-2">
                            <Details inputtype="tel" inputname="Phone Number" inputid="user" />
                        </div>
                        <div className="mt-2">
                            <Details inputtype="email" inputname="email" inputid="user" />
                        </div>
                        <div className="mt-2">
                            <Details inputtype="password" inputname="password" inputid="user" />
                        </div>
                        <div className="Flex space-x-2 mt-4">
                            <button type="submit" className="border-2 border-solid border-black rounded-sm p-1">Join</button>
                            <Link to={"/Login"} className="border-2 border-solid border-black rounded-sm p-1">Back</Link>
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