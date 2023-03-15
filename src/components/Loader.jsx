import AnimatedLogo from "../assets/images/logo-animated.gif";
// app loader
const Loader = () => {
  return (
    <div className="loader">
      <img className="logo" src={AnimatedLogo} alt="apple loader" />
    </div>
  );
};

export default Loader;
