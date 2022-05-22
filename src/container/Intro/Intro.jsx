import "./Intro.css"
import GitHub from "../../img/github.png"
import LinkedIn from "../../img/linkedin.png"
import Instagram from "../../img/instagram.png"
import Vecter1 from "../../img/Vector1.png"
import Vecter2 from "../../img/Vector2.png"
import boy from "../../img/boy.png"
import thumbup from "../../img/thumbup.png"
import Crown from "../../img/crown.png"
import glassimoji from "../../img/glassesimoji.png"
import FloatinDiv from "../FloatingDiv/Floating";
function Intro () {
    



    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">

                    <span>HI I </span>
                    <span>Khuong</span>
                    <span>
                        Frontend Developer with high level of experience in web designing
                        and development, producting the Quality work
                    </span>
                </div>
                <button className="button i-button">Hire me</button>
                <div className="i-icons">
                    <img src={GitHub} alt="github" />
                    <img src={LinkedIn} alt="github" />
                    <img src={Instagram} alt="github" />

                </div>
            </div>
        </div>
    );
};

export default Intro;