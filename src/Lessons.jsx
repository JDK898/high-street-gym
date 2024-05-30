import { Link } from "react-router-dom"
import Header from "./Header.jsx"
import Footer from "./components/Footer.jsx"
import Classes from "./components/tile/lessontyl.jsx"
import Filter from "./components/Filter.jsx"

function Lessons() {
    return (
        <>
            <Header />
            <Filter Filtertitle={"My Lessons"} filterpath={"#"} />
            <section className="flex justify-evenly mx-20 flex-wrap mt-10">
                <Classes
                    ClassType="Lesson name"
                    Classlink="#"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quibusdam tempora voluptates nisi quisquam doloribus obcaecati laboriosam. At, alias non?"
                />
                <Classes
                    ClassType="Lesson name"
                    Classlink="#"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quibusdam tempora voluptates nisi quisquam doloribus obcaecati laboriosam. At, alias non?"
                />
                <Classes
                    ClassType="Lesson name"
                    Classlink="#"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quibusdam tempora voluptates nisi quisquam doloribus obcaecati laboriosam. At, alias non?"
                />
                <Classes
                    ClassType="Lesson name"
                    Classlink="#"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quibusdam tempora voluptates nisi quisquam doloribus obcaecati laboriosam. At, alias non?"
                />
                <Classes
                    ClassType="Lesson name"
                    Classlink="#"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quibusdam tempora voluptates nisi quisquam doloribus obcaecati laboriosam. At, alias non?"
                />
                <Classes
                    ClassType="Lesson name"
                    Classlink="#"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quibusdam tempora voluptates nisi quisquam doloribus obcaecati laboriosam. At, alias non?"
                />
                <Classes
                    ClassType="Lesson name"
                    Classlink="#"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quibusdam tempora voluptates nisi quisquam doloribus obcaecati laboriosam. At, alias non?"
                />
                <Classes
                    ClassType="Lesson name"
                    Classlink="#"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quibusdam tempora voluptates nisi quisquam doloribus obcaecati laboriosam. At, alias non?"
                />
                <Classes
                    ClassType="Lesson name"
                    Classlink="#"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quibusdam tempora voluptates nisi quisquam doloribus obcaecati laboriosam. At, alias non?"
                />
                <Classes
                    ClassType="Lesson name"
                    Classlink="#"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quibusdam tempora voluptates nisi quisquam doloribus obcaecati laboriosam. At, alias non?"
                />
                <Classes
                    ClassType="Lesson name"
                    Classlink="#"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quibusdam tempora voluptates nisi quisquam doloribus obcaecati laboriosam. At, alias non?"
                />
                <Classes
                    ClassType="Lesson name"
                    Classlink="#"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quibusdam tempora voluptates nisi quisquam doloribus obcaecati laboriosam. At, alias non?"
                />
            </section>
            <Footer />

        </>

    )
}

export default Lessons