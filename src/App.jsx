import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Sound from "./components/Sound";
import Display from "./components/Display";

// global main
function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <Sound />
      <Display />
    </div>
  );
}

export default App;
