import { useState } from "react"
import { Link } from "react-router-dom"

function SearchBar() {
    const [value, setValue] = useState(50)
    return (
        <div>
            <form className="bg-base-200 w-[90%] mx-auto rounded-md px-20 py-4 felx flex-col gap-x-4  gap-y-20  items-center">
                <div className="flex flex-row gap-4 justify-between"
                ><div className="flex flex-row gap-20 justify-between">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="search">Search Product</label>
                            <input className="w-full" type="text" placeholder="Search" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="category">Category</label>
                            <select className="select select-bordered select-sm w-full max-w-xs" name="category" id="category">
                                <option value="all">All</option>
                                <option value="Tabels">Tabels</option>
                                <option value="Chairs">Chairs</option>
                                <option value="Sofas">Sofas</option>
                                <option value="Beds">Beds</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="company">Company</label>
                            <select className="select select-bordered select-sm w-full max-w-xs" name="company" id="company">
                                <option value="all">All</option>
                                <option value="Modenza">Modenza</option>
                                <option value="Luxora">Luxora</option>
                                <option value="Artifex">Artifex</option>
                                <option value="Comfora">Comfora</option>
                                <option value="Homestead">Homestead</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="Sort By">Sort By</label>
                            <select className="select select-bordered select-sm w-full max-w-xs" name="sort" id="sort">
                                <option value="a-z">A-Z</option>
                                <option value="z-a">Z-A</option>
                                <option value="low-high">Low-High</option>
                                <option value="high-low">High-Low</option>
                            </select>
                        </div>

                    </div>

                </div>
                <div className="flex flex-row gap-48 justify-around mr-72 mt-12">
                    <div className="flex flex-col gap-2 pr-28">
                        <input type="range" min={0} max={1000.00} value={value} onChange={(e) => setValue(e.target.value)} className="range range-primary range-sm" />
                        <span>{value} $</span>
                        <div className="w-full flex gap-x-52 text-xs px-2 mt-2">
                            <span className="font-bold text-md">0</span>
                            <span className="font-bold text-md">Max : $1,000.00</span>
                        </div>
                    </div>
                    <div className="form-control items-center flex flex-col gap-2 pr-28">
                        <label className="label cursor-pointer"><span className="label-text capitalize">free shipping</span></label>
                        <input type="checkbox" className="checkbox checkbox-primary checkbox-sm" />
                    </div>
                    <div className="flex flex-row gap-4">
                        <button type="submit" className="btn btn-primary btn-sm w-full">search</button>
                        <Link className="btn btn-accent btn-sm w-full" to="/products">reset</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SearchBar
