// import { Link } from "react-router-dom";

function Blogpost ({Author, Title, Blogcontent}) {
    return(
        <section className="max-w-80 p-15 border-solid border-black border-2 rounded-md min-w-20">
            <h3>{Title}</h3>
            <p>{Blogcontent}</p>
            <h4>{Author}</h4>
        </section>
    )
}

export default Blogpost