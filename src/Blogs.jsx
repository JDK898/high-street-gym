// import { Link } from "react-router-dom";
import Header from "./Header";
import Blogpost from "./components/tile/blogpost";
import Filter from "./components/Filter";

function Blogs() {
    return (
        <>
            <Header />
            <Filter Filtertitle={"Write Blog"} filterpath={"/Blogcreate.jsx"}/>
            <section className="flex justify-evenly mx-20 flex-wrap mt-10">
                <Blogpost Title="In my opinon" Author="Bobby Jone" Blogcontent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus alias quo harum sint, minus enim." />
                <Blogpost Title="In my opinon" Author="Bobby Jone" Blogcontent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus alias quo harum sint, minus enim." />
                <Blogpost Title="In my opinon" Author="Bobby Jone" Blogcontent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus alias quo harum sint, minus enim." />
                <Blogpost Title="In my opinon" Author="Bobby Jone" Blogcontent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus alias quo harum sint, minus enim." />
                <Blogpost Title="In my opinon" Author="Bobby Jone" Blogcontent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus alias quo harum sint, minus enim." />
                <Blogpost Title="In my opinon" Author="Bobby Jone" Blogcontent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus alias quo harum sint, minus enim." />
                <Blogpost Title="In my opinon" Author="Bobby Jone" Blogcontent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus alias quo harum sint, minus enim." />
                <Blogpost Title="In my opinon" Author="Bobby Jone" Blogcontent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus alias quo harum sint, minus enim." />
                <Blogpost Title="In my opinon" Author="Bobby Jone" Blogcontent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus alias quo harum sint, minus enim." />
                <Blogpost Title="In my opinon" Author="Bobby Jone" Blogcontent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus alias quo harum sint, minus enim." />
            </section>
        </>
    )
}

export default Blogs