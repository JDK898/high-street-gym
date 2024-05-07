import "./Login.css"
import Details from "./components/Forms/Clientforms.jsx"
import Header from "./Header"
import Btn from "./components/Forms/button.jsx"


function Login() {
    return (
        <>
            <Header />
            <h1 className="text-3xl">Welcom Back</h1>
            <img src="https://picsum.photos/400/400" alt="stock image" className="" />
            {/* TODO: fix invisable sytling problem */}
            <Details inputtype="text" inputname="Username" inputid="user" />
            <Details inputtype="password" inputname="Password" inputid="PW" />
            {/* TODO: add Login and join btn */}

            {/* <Link href="#">Reset Password</Link> */}
        </>
    )
}


export default Login