import React from 'react'
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
// import { themeContext } from '../../context';
// import { motion } from "framer-motion";
// import {Link} from 'react-scroll'

const Works = () => {
    return (
        <div className="works" id="works"> 
            {/* Left */}
            <div className="awesome">
                <span>Works for all these</span>
                <span>Services</span>
                <span>
                    Lorem ispum is simpley dummy text of printing of printing Lorem
                    <br />
                    ispum is simpley dummy text of printing
                </span>
                {/* <a href={Resume}></a> */}
                <button className="button s-button">Hire me</button>
                <div className="blur s-blurl" style={{background: "#abf1ff94",}}></div>
            </div>

            {/* Right */}
            <div className="w-right">
                <div className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Upwork} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt="" />
                    </div>
                </div>
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>

            </div>
        </div>        
    )
}

export default Works