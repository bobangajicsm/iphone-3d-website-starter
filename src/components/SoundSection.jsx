import React from "react";
function SoundSection() {

  const handleLearnMore = () => {
    const element = document.querySelector(".display-section");
    window.scrollTo({
        top: element?.getBoundingClientRect().bottom,
        left: 0,
        behavior:'smooth'
      })
    }

  return (
    <div className="sound-section wrapper">
      <div className="body">
        <div className="sound-section-content content">
          <h2 className="title">New Sound System</h2>
          <p className="text">Feel the base.</p>
          <span className="description">
            From $50/mo. for 24 mo. or $999 before trade-in
          </span>
          <ul className="links">
        <li>
          <button className="button">Buy</button>
        </li>
        <li>
          <a onClick={handleLearnMore} className="link">Learn more.</a>
        </li>
      </ul>
        </div>
      </div>
    </div>
  );
}

export default SoundSection;
