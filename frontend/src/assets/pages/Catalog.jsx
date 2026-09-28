import React from "react";
import Header from "../components/Header";
import tshirt from "../img/camiseta.webp"
import tshirt2 from "../img/camiseta2.webp"
import clothe3 from "../img/ropa3.webp"
import tshirt4 from "../img/camiseta4.webp"

const Catalog = () => {
    return(
        <div>
            <main>
                <section className="mt-30 grid grid-cols-4 mx-10">
                    <a href="" className="mb-6">
                        <article>
                            <img src={tshirt} alt="" className="h-138"/>
                            <h2 className="font-[Stack]">T-Shirt STWD boxy</h2>
                            <h3 className="font-extrabold font-[Stack]">19.99 USD</h3>
                        </article>
                    </a>
                    <a href="hola1" className="mb-6">
                        <article>
                            <img src={tshirt2} alt="" className="h-138"/>
                            <h2 className="font-[Stack]">T-Shirt STWD logo graffiti</h2>
                            <h3 className="font-extrabold font-[Stack]">29.95 USD</h3>
                        </article>
                    </a>
                    <a href="hola1" className="mb-6">
                        <article>
                            <img src={clothe3} alt="" className="h-138"/>
                            <h2 className="font-[Stack]">T-Shirt STWD boxy lines</h2>
                            <h3 className="font-extrabold font-[Stack]">32.99 USD</h3>
                        </article>
                    </a>
                    <a href="hola1" className="mb-6">
                        <article>
                            <img src={tshirt4} alt="" className="h-138"/>
                            <h2 className="font-[Stack]">T-Shirt STWD boxy</h2>
                            <h3 className="font-extrabold font-[Stack]">19 USD</h3>
                        </article>
                    </a>

                    <a href="" className="mb-6">
                        <article>
                            <img src={tshirt} alt="" className="h-138"/>
                            <h2 className="font-[Stack]">T-Shirt STWD boxy</h2>
                            <h3 className="font-extrabold font-[Stack]">19.99 USD</h3>
                        </article>
                    </a>
                    <a href="hola1" className="mb-6">
                        <article>
                            <img src={tshirt2} alt="" className="h-138"/>
                            <h2 className="font-[Stack]">T-Shirt STWD logo graffiti</h2>
                            <h3 className="font-extrabold font-[Stack]">29.95 USD</h3>
                        </article>
                    </a>
                    <a href="hola1" className="mb-6">
                        <article>
                            <img src={clothe3} alt="" className="h-138"/>
                            <h2 className="font-[Stack]">T-Shirt STWD boxy lines</h2>
                            <h3 className="font-extrabold font-[Stack]">32.99 USD</h3>
                        </article>
                    </a>
                    <a href="hola1" className="mb-6">
                        <article>
                            <img src={tshirt4} alt="" className="h-138"/>
                            <h2 className="font-[Stack]">T-Shirt STWD boxy</h2>
                            <h3 className="font-extrabold font-[Stack]">19 USD</h3>
                        </article>
                    </a>
                </section>
            </main>
        </div>
    )
}

export default Catalog