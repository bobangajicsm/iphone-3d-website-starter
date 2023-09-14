import DisplaySection from "./components/displaySection/DisplaySection.jsx";
import Jumbotron from "./components/jumbotron/Jumbotron.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import SoundSection from "./components/soundSection/SoundSection.jsx";
import WebGiViewer from "./components/viewer/WebGiViewer.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <SoundSection />
      <DisplaySection />
      <WebGiViewer />
    </div>
  );
}

export default App;
