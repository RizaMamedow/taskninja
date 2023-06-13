import React from "react";
import {FaCheck} from 'react-icons/fa';


const BrandSide = () => {
    return (
        <div className="brand-side">
            <div className="header">
                <FaCheck className="icon"/>
                <span style={{marginLeft: '7px'}}>Task</span>
                <span>Ninja</span>
            </div>
            <div className="subheader">
                <h6>Organize your day</h6>
            </div>
        </div>
    );
};

export default BrandSide;