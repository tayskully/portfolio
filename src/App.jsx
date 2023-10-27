import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { motion } from "framer-motion";
import Nav from "./components/NavBar";
import Homepage from "./components/pages/Homepage";
import ContactForm from "./components/pages/Contact";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Router>
      <header className="d-flex">
        <div className="justify-content-between">
          <motion.h1 animate={{ x: 800 }}>Taylor Sullivan</motion.h1>
          <motion.h3 animate={{ x: 900 }}>
            a web developer & design enthusiast{" "}
          </motion.h3>
          <motion.h5 animate={{ x: 900 }}>
            cultivating clean, user-centric products.... or an expert liar{" "}
          </motion.h5>
        </div>
        <Nav />
      </header>
      <Routes>
        <Route path={"/"} element={<Homepage/> } />
        <Route path={"/contact"} element={<ContactForm/>} />
        <Route path={"/about-me"} element={<h1>about me</h1>} />
        <Route path={"/projects"} element={<h1>projects</h1>} />
      </Routes>
  

      <footer>
        <p>Created with 🧚🏼‍♀️</p>
      </footer>
    </Router>
  );
}

export default App;
