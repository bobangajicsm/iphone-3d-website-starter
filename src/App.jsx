import Display from "./components/Display";
import Jumbotron from "./components/Jumbotron";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Sound from "./components/Sound";
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
      <Loader />
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
