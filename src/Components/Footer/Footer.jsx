import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Ernold</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#project" className="footer__link">Project</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.facebook.com/profile.php?id=100011243974355" className="footer__social-link" target="_blank">
                    <i class="bx bxl-facebook"></i>
                </a>

                <a href="https://www.instagram.com/ernold_mcs/" className="footer__social-link" target="_blank">
                    <i class="bx bxl-instagram-alt"></i>
                </a>

                <a href="https://twitter.com/Lux7_Kun" className="footer__social-link" target="_blank">
                    <i class="bx bxl-twitter"></i>
                </a>
            </div>

            <span className="footer__copy">&#162; Crypticalcoder. All rigths reserved</span>
        </div>
    </footer>
  )
}

export default Footer