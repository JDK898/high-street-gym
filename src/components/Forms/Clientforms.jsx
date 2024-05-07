// import { Link } from "react-router-dom"
import "./Clientforms.css"

function Details({ inputtype, inputname, inputid }) {
    return (
        <>
        <label htmlFor={inputid} className="block">{inputname}</label>
        <input type={inputtype} name={inputname} id={inputid} placeholder={inputname} className="border border-solid border-2 border-black" />
        </>
        
    )
}

export default Details