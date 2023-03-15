import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Sound from "./components/Sound";
import Display from "./components/Display";
import Webgi from "./components/Webgi";
import { useRef } from "react";

// global main
function App() {
  const webgiViewerRef = useRef();
  const contentRef = useRef();

  const handlePreview = () => {
    webgiViewerRef.current.triggerPreview();
  };

  return (
    <div className="App">
      <div ref={contentRef} id="content">
        <Navbar />
        <Jumbotron />
        <Sound />
        <Display triggerPreview={handlePreview} />
      </div>
      <Webgi contentRef={contentRef} ref={webgiViewerRef} />
    </div>
  );
}

export default App;
