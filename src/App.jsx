import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import { motion, AnimatePresence } from "framer-motion";
import Nav from "./components/NavBar";
import Homepage from "./components/pages/Homepage";
import ContactForm from "./components/pages/Contact";
import AboutMe from "./components/pages/AboutMe";
import DesignPortfolio from "./components/pages/DesignPortfolio";

function App() {
  return (
    <Router>
      <header className="d-flex justify-content-center flex-wrap">
        <motion.div
          initial={{ y: "800%", opacity: 0 }}
          animate={{
            y: 0,
            transition: { duration: 2, delay: 2 },
            opacity: 1,
          }}
        >
          <img src="/name.svg" className="responsive"></img>
          <h3>a web developer & design enthusiast </h3>
          <h5>cultivating clean, user-centric products </h5>
        </motion.div>
        <motion.div
          initial={{ y: "800%", opacity: 0 }}
          animate={{
            y: 0,
            transition: { duration: 3 },
            opacity: 1,
          }}
        >
          <br />
          <img src="/TS.svg" width="100px"></img>
        </motion.div>
      </header>
      <motion.div
        initial={{ y: "800%", opacity: 0 }}
        animate={{
          y: 0,
          transition: { duration: 2, delay: 2 },
          opacity: 1,
        }}
      >
        <div className="border">
          {" "}
          <Nav />{" "}
        </div>
      </motion.div>
      <motion.div
        initial={{ y: "800%", opacity: 0 }}
        animate={{
          y: 0,
          transition: { duration: 3, delay: 2 },
          opacity: 1,
          delay: 5,
        }}
        className="container d-flex flex-wrap"
      >
        <AnimatePresence>
          <Routes>
            <Route path={"/"} element={<Homepage />} />
            <Route path={"/design-portfolio"} element={<DesignPortfolio />} />
            <Route path={"/contact"} element={<ContactForm />} />
            <Route path={"/about-me"} element={<AboutMe />} />
          </Routes>
        </AnimatePresence>
      </motion.div>
      <footer>
        <a href="https://github.com/tayskully">
          <img src="github-mark-white.svg" width="50px"></img>
        </a>
        <a href="https://www.linkedin.com/in/taysully/">
          <img src="LI-Logo.png" width="90px"></img>
        </a>
        <a href="https://medium.com/@taysully94">
          <img src="medium-icon-svgrepo-com.svg" width="90px"></img>
        </a>
      </footer>
    </Router>
  );
}

export default App;
