import React from "react";
import { NavLink } from 'react-router-dom';
import ButtonVariants from "./ui/buttons";

const HeaderComponent = () => {
    return (
        <header className="fixed top-0 inset-x-3 my-2 z-50  items-center shadow-lg">
            <nav className="flex items-center justify-between font-[Bowly] border-2 h-18 px-3 border-[#8FBFE0] bg-[#f7eee1]">
                {/* Izquierda: navegación principal */}
                <ul className="flex items-center gap-4">
                    <li>
                        <NavLink
                            to="/"
                            className= {ButtonVariants.primary}
                        >
                            HOME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/catalog" className={ButtonVariants.primary}>
                            CATALOG
                        </NavLink>
                    </li>
                </ul>

                {/* Centro: buscador */}
                <form action="" className="flex items-center border border-[#292929]">
                    <input
                        type="text"
                        placeholder="..."
                        className={ButtonVariants.input}
                    />
                    <button
                        type="submit"
                        className={ButtonVariants.input}
                    >
                        SEARCH
                    </button>
                </form>

                {/* Derecha: cuenta y carrito */}
                <ul className="flex items-center gap-6">
                    <li><a href="/login" className={ButtonVariants.primary}>LOGIN</a></li>
                    <li><a href="/cart" className={ButtonVariants.primary}>CART</a></li>
                </ul>
            </nav>

            <div className="header-annoucement text-center bg-[#8FBFE0] font-bold font-[Stack]">
                <p>10% Discount using: WEL10COME</p>
            </div>
        </header>
    );
}

export default HeaderComponent;