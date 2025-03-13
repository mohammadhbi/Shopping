import { Link } from "react-router-dom";

function Upside() {
    return (
        <div className="flex flex-col  align-element py-20">
            <div className="flex  justify-center gap-24 items-center align-element py-20">
                <div>
                    <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl ">
                        We are changing the way people shop
                    </h1>
                    <p className="mt-8 pt-12 max-w-xl text-lg leading-8">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
                        repellat explicabo enim soluta temporibus asperiores aut obcaecati
                        perferendis porro nobis.
                    </p>
                </div>
                <div>
                    <img src="https://react-vite-comfy-store-v2.netlify.app/assets/hero1-deae5a1f.webp" alt="upside" className="rounded-box h-full w-80 object-cover" />
                </div>

            </div>
            <button className="btn btn-primary w-20 ml-80 mt-[-100px]"><Link to="/products">
            OurProducts
            </Link>
            </button>
        </div>

    );
}

export default Upside;
