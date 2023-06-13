import React from "react";
import {FaGithub, FaTelegram} from 'react-icons/fa';


const AboutSide = () => {
    return (
        <div className="contact-side">
            <h5>About Me</h5>
            <div className="d-flex align-items-center github">
                <FaGithub/>
                <a href="https://github.com/RizaMamedow" className="m-2">RizaMamedow</a>
            </div>
            <div className="d-flex align-items-center telegram">
                <FaTelegram/>
                <a href="https://t.me/ponchik_kruglyy" className="m-2">@ponchik_kruglyy</a>
            </div>
        </div>
    );
};

export default AboutSide;