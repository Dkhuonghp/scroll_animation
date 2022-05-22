import React from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
// import Title from "https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.6.1/vanilla-tilt.js";
// import { themeContext } from "../../Context";
// import { motion } from "framer-motion";
// import Resume from './resume.pdf';

// import Title from "react-parallax-tilt"
// import Title from "vanilla-tilt"
  
const Services = () => {

    return (
        <div className="services">
            {/* Left */}
            <div className="awesome">
                <span>My Awesome</span>
                <span>Services</span>
                <span>
                    Lorem ispum is simpley dummy text of printing of printing Lorem
                    <br />
                    ispum is simpley dummy text of printing
                </span>
                <button className="button s-button">Download CV</button>
                <div className="blur s-blurl" style={{background: "#abf1ff94",}}></div>
            </div>

            {/* Card Right */}
            <div className="cards">
                <div>
                    <Card
                    emoji={HeartEmoji}
                    heading={"Design"}
                    detail={"Figma, sketch, Photoshop, Adobe"}
                    
                    />
                </div>
                <div>
                    <Card
                    emoji={Glasses}
                    heading={"Design"}
                    detail={"Figma, sketch, Photoshop, Adobe"}
                    
                    />
                </div>
                <div>
                    <Card
                    emoji={Humble}
                    heading={"Design"}
                    detail={"Figma, sketch, Photoshop, Adobe"}
                    
                    />
                </div>
                <div className="blur s-blur2" style={{background:"var(--purple",}}></div>
            </div>
        </div>


        // <section className="section">
        //     <h1>Profile</h1>

        //     <div className="wrapper" id="services" data-tilt data-tilt-glare data-tilt-max-glare="0.8">
        //         <div className="profile"> 
        //             <div className="iconWrap">

        //                 <div className="iconBtn1"></div>
        //                 <div className="iconBtn2"></div>
        //                 <div className="iconBtn3"></div>

        //             </div>
        //             <div className="container-code">
        //                 <p className="codeWrap" data-value="1">
        //                     <span className="code left-3">
        //                         <span className="class">function</span>
        //                         <span className="className">user</span>
        //                         <span className="barackets"></span>

        //                     </span>
        //                 </p>
        //                 <p className="codeWrap" data-value="2">
        //                     <span className="code left">
        //                         <span className="class">profile</span>
        //                         <span className="className">()</span>
        //                         <span className="barackets"></span>

        //                     </span>
        //                 </p>
        //                 <div className="user">
        //                     <p className="codeWrap" data-value="3">
        //                         <span className="code left-2">
        //                             <span className="property">this</span>
        //                             <span className="brackets">.</span>
        //                             <span className="methods">name</span>
        //                             <span className="barackets_2">=</span>
        //                             <span className="string">"Nguyen Duy Khuong"</span>
        //                         </span>
        //                     </p>
        //                     <p className="codeWrap" data-value="4">
        //                         <span className="code left-2">
        //                             <span className="property">this</span>
        //                             <span className="brackets">.</span>
        //                             <span className="methods">birthday</span>
        //                             <span className="barackets_2">=</span>
        //                             <span className="string">"1996/1/13"</span>
        //                         </span>
        //                     </p>
        //                     <p className="codeWrap" data-value="5">
        //                         <span className="code left-2">
        //                             <span className="property">this</span>
        //                             <span className="brackets">.</span>
        //                             <span className="methods">age</span>
        //                             <span className="barackets_2">=</span>
        //                             <span className="string">"26"</span>
        //                         </span>
        //                     </p>
        //                     <p className="codeWrap" data-value="6">
        //                         <span className="code left-2">
        //                             <span className="property">this</span>
        //                             <span className="brackets">.</span>
        //                             <span className="methods">country</span>
        //                             <span className="barackets_2">=</span>
        //                             <span className="string">"Viet Nam"</span>
        //                         </span>
        //                     </p>
        //                     <p className="codeWrap" data-value="7">
        //                         <span className="code left-2">
        //                             <span className="property">this</span>
        //                             <span className="brackets">.</span>
        //                             <span className="methods">school</span>
        //                             <span className="barackets_2">=</span>
        //                             <span className="string">"ECC computer"</span>
        //                         </span>
        //                     </p>
        //                 </div>
        //                 <p className="codeWrap" data-value="8">
        //                     <span className="code left">
        //                         <span className="barackets_3"></span>
        //                     </span>

        //                 </p>
        //                 <p className="codeWrap" data-value="9">
        //                     <span className="code flex left">
        //                         <span className="static">static</span>
        //                         <span className="className">user ( )</span>
        //                         {/* <span className="barackets">(</span> */}
        //                     </span>
        //                 </p>
        //             </div>
        //             {/* <div className="blur" style={{background:"#abf1ff94",left:"0px"}}></div> */}
        //         </div>
        //     </div>

                
        // </section>
    )
}

export default Services;