import {NavLink} from "react-router-dom"
import './Navbar.css'
import { useState } from "react"
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar(){

    const [menu, setMenu] = useState("/cats");

    return(
        <nav className="navbar">
            <div className="logo">
                Cats
                <div className="logoicon">🐱</div>
            </div>
            
            <ul >
                <li>
                    <NavLink to="/cats" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                    {({ isActive }) => (
                        <>
                        Cats
                        {isActive && <hr />}
                        </>
                    )}
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/breeds" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                    {({ isActive }) => (
                        <>
                        Breeds
                        {isActive && <hr />}
                        </>
                    )}
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/localcats" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                    {({ isActive }) => (
                        <>
                        Local
                        {isActive && <hr />}
                        </>
                    )}
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/wildcats" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                    {({ isActive }) => (
                        <>
                        Wild
                        {isActive && <hr />}
                        </>
                    )}
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/news" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                    {({ isActive }) => (
                        <>
                        News
                        {isActive && <hr />}
                        </>
                    )}
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/rough" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                    {({ isActive }) => (
                        <>
                        Rough
                        {isActive && <hr />}
                        </>
                    )}
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/auth" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                    {({ isActive }) => (
                        <>
                        <FaShoppingCart size={14}/>
                        {isActive && <hr />}
                        </>
                    )}
                    </NavLink>
                </li>
            </ul>

        </nav>
    )
}