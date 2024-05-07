// import { Link } from "react-router-dom"
import "./Clientforms.css"

function Details({inputtype, inputname, inputid}) {
    return (
        <>
        <input type={inputtype} name={inputname} id={inputid} />        
        </>
    )
}

export default Details