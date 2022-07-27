import Home from "./components/screens/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Recruit from "./components/screens/Recruit";
import Project from "./components/screens/Project";
import Contact from "./components/screens/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/recruit" element={<Recruit />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>    
  );
}

export default App;
