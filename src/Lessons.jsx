import { Link } from "react-router-dom"
import Header from "./Header.jsx"
import Classes from "./components/tile/lessontyl.jsx"

function Lessons() {
    return (
        <>
            <Header />

            <Classes ClassType="Lesson name"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quibusdam tempora voluptates nisi quisquam doloribus obcaecati laboriosam. At, alias non?"
            />
        </>

    )
}

export default Lessons