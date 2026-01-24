import { Navbar, Welcome, Dock } from "#components";
import { Finder, Resume, Terminal } from "#windows";
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
      <Finder />
    </main>
  );
};

export default App;
