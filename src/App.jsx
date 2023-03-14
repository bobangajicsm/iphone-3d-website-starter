import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Sound from "./components/Sound";
import Display from "./components/Display";
import Webgi from "./components/Webgi";

// global main
function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <Sound />
      <Display />
      <Webgi />
    </div>
  );
}

export default App;
