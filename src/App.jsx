import { Navbar, Welcome, Dock } from "#components";
import { Resume, Terminal } from "#windows";
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
    </main>
  );
};

export default App;
