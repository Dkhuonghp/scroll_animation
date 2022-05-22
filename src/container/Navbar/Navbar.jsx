import React from "react";
import "./Navbar.css";

// import Toggle from "../Toggle/Toggle"
// import toggle from "../../img/glasses.png"
// import { Link } from "react-scroll";

const navbar = () => {
    return (
        <div className="n-wrapper" id="navbar">
            <div className="n-left">
                <div className="n-name">LOGO</div>
                {/* <Toggle/> */}
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{ listStyleType: "none" }}>
                        <li><a href="#"></a>home</li>
                        <li><a href="#services">Serivces</a></li>
                        <li><a href="#works">works</a></li>
                        {/* <li>
                            <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="services" spy={true} smooth={true}>
                                Serivces
                            </Link>
                        </li>
                        <li>
                            <Link to="works" spy={true} smooth={true}>
                                Experience
                            </Link>
                        </li>
                        <li>
                            <Link to="portfolio" spy={true} smooth={true}>
                                Protfolio
                            </Link>
                        </li>
                        <li>
                            <Link to="testimonial" spy={true} smooth={true}>
                                Testimonial
                            </Link>
                        </li> */}

                    </ul>
                </div>
                <button className="button">Contact us</button>
            </div>
        </div>
    )
}

export default navbar;