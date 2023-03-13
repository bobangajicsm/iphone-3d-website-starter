import Logo from "../assets/images/logo.svg";
import Search from "../assets/images/search.svg";
import Store from "../assets/images/store.svg";

// global navbar
const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
        <ul className="list-styled">
          <li>
            <img src={Logo} alt="Apple logo" />
          </li>
          <li>
            <a className="link-styled">Store</a>
          </li>
          <li>
            <a className="link-styled">Mac</a>
          </li>
          <li>
            <a className="link-styled">iPad</a>
          </li>
          <li>
            <a className="link-styled">iPhone</a>
          </li>
          <li>
            <a className="link-styled">Watch</a>
          </li>
          <li>
            <a className="link-styled">AirPods</a>
          </li>
          <li>
            <a className="link-styled">Tv & Home</a>
          </li>
          <li>
            <a className="link-styled">Entertainment</a>
          </li>
          <li>
            <a className="link-styled">Accessories</a>
          </li>
          <li>
            <a className="link-styled">Support</a>
          </li>
          <li>
            <img src={Search} alt="Search" />
          </li>
          <li>
            <img src={Store} alt="Store" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
