import {Link} from "react-router-dom"
import './Navbar.css'
import { useState } from "react"

export default function Navbar(){

    const [menu, setMenu] = useState("/cats");

    return(
        <nav className="navbar">
            <div className="logo">
                Cats
                <div className="logoicon">🐱</div>
            </div>
            
            <ul>
                <li onClick={()=>setMenu("/cats")}><Link to = "/cats">Cats{menu==="/cats" ? <hr/>:<></>}</Link></li>
                <li onClick={()=>setMenu("/breeds")}><Link to = "/breeds">Breeds{menu==="/breeds" ? <hr/>:<></>}</Link></li>
                <li onClick={()=>setMenu("/localcats")}><Link to = "/localcats">Local{menu==="/localcats" ? <hr/>:<></>}</Link></li>
                <li onClick={()=>setMenu("/wildcats")}><Link to = "/wildcats">Wild{menu==="/wildcats" ? <hr/>:<></>}</Link></li>
                <li onClick={()=>setMenu("/news")}><Link to = "/news">News{menu==="/news" ? <hr/>:<></>}</Link></li>
            </ul>
        </nav>
    )
}