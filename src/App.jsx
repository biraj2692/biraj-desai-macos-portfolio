import { Navbar, Welcome, Dock } from "#components";
import { Finder, Resume, Terminal, TextFile, ImgFile, Contact } from "#windows";
import SafariWindow from "#windows/SafariWindow";

import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Dock />
      <Welcome />
      <SafariWindow />
      <Terminal />
      <Resume />
      <Contact />
      <TextFile />
      <ImgFile />
      <Finder />
    </main>
  );
};

export default App;
