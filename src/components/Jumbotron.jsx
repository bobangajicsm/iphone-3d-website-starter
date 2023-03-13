import Iphone from "../assets/images/iphone-14.jpg";
import HoldingIphone from "../assets/images/iphone-hand.png";

// global jumbotron
const Jumbotron = () => {
  return (
    <div className="jumbotron-section wrapper">
      <h2 className="title">New</h2>
      <img className="logo" src={Iphone} alt="iPhone 14 Pro" />
      <p className="text">Big and bigger...</p>
      <span className="description">
        From $41.62 per month for 24 months or $999 before trade-in
      </span>
      <ul className="links">
        <li>
          <button className="button">Buy</button>
        </li>
        <li>
          <a className="link">Learn more</a>
        </li>
      </ul>
      <img className="iphone-img" src={HoldingIphone} alt="iPhone" />
    </div>
  );
};

export default Jumbotron;
