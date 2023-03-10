import React from "react";

function DisplaySection() {

    const handleTop = () => {
        const element = document.querySelector(".jumbotron-section");
        window.scrollTo({
            top: element?.getBoundingClientRect().top,
            left: 0,
            behavior:'smooth'
          })
        }

    return ( 
    <div className="display-section wrapper">
        <h2 className="title">New</h2>
        <p className="text">Brilliant.</p>
        <span className="description">
            A display that's up to 2x brighter in the sun
        </span>
        <button className="button">Try me!</button>
        <button onClick={handleTop} className="back-button">Top</button>

    </div> );
}

export default DisplaySection;