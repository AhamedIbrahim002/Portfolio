// src/App.js
import './App.css';
import Home from "./Components/Home";
import Projects from "./Components/Project";
import About from "./Components/About";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Menu from "./Components/Menu";
import Experience from "./Components/Experience";
import Certification from "./Components/Certification";
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="App">
      <Menu />
      <Home />
      <Experience />
      <Education />
      <Projects />
      <Skills /> 
<Certification />
<About />   
<Footer />
    </div>
  );
}

export default App;
