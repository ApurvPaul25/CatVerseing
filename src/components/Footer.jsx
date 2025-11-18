import React from 'react'

export default function Footer() {
  return (
    <footer className='fixed bottom-0 left-0 w-full bg-zinc-900 text-white py-4'>
        <div className="footer-top">
            <div className="container grid grid-four-column">
            <div className="logo-footer">
                <img src="" alt="logo" />
                <p>Description</p>
            </div>

            <div className="footer-browser">
                <h3>Browser</h3>
                <p>NavLink</p>
                <p>NavLink</p>
                <p>NavLink</p>
                <p>NavLink</p>
            </div>

            <div className="footer-services">
                <h3>Services</h3>
                <p>CTA</p>
                <p>CTA</p>
                <p>CTA</p>
                <p>CTA</p>
            </div>

            <div className="contact-footer">
                <h3>Contact Us</h3>
                <input type="email" placeholder='Email Us' />
                <input type="submit" value="Subscribe" />
                <h3>Location</h3>
                <div className="socials">
                    <p>Icon</p>
                    <p>Icon</p>
                    <p>Icon</p>
                    <p>Icon</p>
                </div>
            </div>
        </div>

            <div className="footer-bottom">
                <hr />
                <div className="bottom grid grid-two-column font-sm">
                    <div>
                        <p>@Kayden</p>
                    </div>
                    <div>
                        <p>Privacy Policy</p>
                        <p>Terms & Conditions</p> 
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}
