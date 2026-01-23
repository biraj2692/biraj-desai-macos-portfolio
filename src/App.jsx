import { Navbar, Welcome, Dock } from "#components";
import { Safari, Terminal } from "#windows";

import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Dock />
      <Welcome />
      <Safari />
      <Terminal />
    </main>
  );
};

export default App;
