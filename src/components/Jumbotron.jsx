import React from "react";
import Iphone from '../assets/images/iphone-14.jpg'

function Jumbotron() {
    return (
        <div className="jumbotron-section wrapper">
            <h2 className="title">New</h2>
            <img className="logo" src={Iphone} alt="iPhone 14 Pro"/>
        </div>
      );
}

export default Jumbotron;