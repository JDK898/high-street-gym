import { Link } from "react-router-dom"

function Filter({Filtertitle, filterpath}) {
    return (
        <section className="flex flex-nowrap justify-between p-3 bg-cyan-800">
            <h1 className="text-2xl"><Link to={filterpath}>{Filtertitle}</Link></h1>
            <img src="" alt="" />
            <input type="checkbox" name="filter" id="filter" className="hidden" />
        </section>
    )
}

export default Filter