import "./App.css";
import Application from "./components/application/Application";
import Greet from "./components/greet/Greet";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="App">
      <Skills skills={["HTML", "CSS", "JS"]} />
      <Application />
      <Greet name={"name"} />
    </div>
  );
}

export default App;
