import React from 'react'
import "../components/Footer.css"
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
        <div className="footer-top">
            <div className="container grid grid-four-column">
            <div className="logo-footer">
                <h1 style={{ color: "teal" }}>&lt;/Apurva&gt;</h1>
                <p>Cats are curious,
                sharp-witted creatures that move
                like they own the world—and honestly,
                they kind of do.</p>
            </div>

            
                <nav className="footer-nav">
                    <NavLink to="/" className="footer-link">
                    Home
                    </NavLink>
                    <NavLink to="/cats" className="footer-link">
                    Cats
                    </NavLink>
                    <NavLink to="/breeds" className="footer-link">
                    Breeds
                    </NavLink>
                    <NavLink to="/local" className="footer-link">
                    Local
                    </NavLink>
                    <NavLink to="/wild" className="footer-link">
                    Wild
                    </NavLink>
                    <NavLink to="/news" className="footer-link">
                    News
                    </NavLink>
                </nav>
            

            <div className="footer-services">
                <h3>Services</h3>
                <NavLink to="/breeds" className="footer-link">
                    Gallery
                </NavLink>
                <NavLink to="/wild" className="footer-link">
                    Wild-info
                </NavLink>
                <NavLink to="/news" className="footer-link">
                    Latest
                </NavLink>
                <NavLink to="/cats" className="footer-link">
                    Every-details
                </NavLink>
            </div>

            <div className="contact-footer">
                <h3>Contact Us</h3>
                <div className='contact-input'>
                <input type="email" placeholder='Email Us' />
                <input type="submit" value="Subscribe" />
                </div>
                <h3>Socials</h3>
                <div className="socials">
                    <FaTwitter />
                    <FaInstagram />
                    <FaGithub />
                    <FaLinkedin />
                </div>
            </div>
        </div>

            <div className="footer-bottom">
                <hr />
                <div className="bottom">
                    <div>
                        <p>@Kayden</p>
                    </div>
                    <div className='PP'>
                        <p>Privacy Policy</p>
                        <p>|</p>
                        <p>Terms & Conditions</p> 
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}
