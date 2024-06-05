import { Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function BlogCreate() {
    return (
        <>
            <Header />
            <section className="flex flex-row max-md:flex-wrap-reverse max-md:justify-evenly">
                <form className="flex ml-40 mt-20 flex-col justify-around basis-2/3 max-md:ml-0">
                    <input name="blogtitle" id="blogtitle" placeholder="Title" maxLength={25} className="border-2 border-black border-solid min-h-4 max-h-8 rounded-md max-w-36 mt-5" />
                    <textarea name="blogcontent" id="blogcontent" placeholder="Write your Blog here" maxLength={500} className="min-w-36 max-w-2xl w-10/12 p-15 border-solid border-black border-2 rounded-md min-h-60 mt-5" />
                    <div className="Flex space-x-2 mt-4">
                        <button type="button" className="border-2 border-black border-solid rounded-md min-w-14 bg-yellow-500 hover:bg-yellow-600 mt-5">Post</button>
                        <Link to={"/Blogs"} className="border-2 border-black border-solid rounded-md min-w-14 bg-yellow-500 hover:bg-yellow-600 mt-5 px-2 py-0.5">Back</Link>
                    </div>
                </form>
                <img src="src\assets\image-solid.svg" alt="" className="max-w-xs max-md:max-w-80 mr-60 max-md:mt-10 max-md:align-middle max-md:mr-0" />
            </section>
            <Footer />
        </>

    )
}

export default BlogCreate