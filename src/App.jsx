import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { motion, AnimatePresence } from "framer-motion";
import Nav from "./components/NavBar";
import Homepage from "./components/pages/Homepage";
import ContactForm from "./components/pages/Contact";
import AboutMe from "./components/pages/AboutMe";
// import styled from "styled-components";

function App() {
  return (
    <Router>
      <header className="d-flex justify-content-center">
        <motion.div
          initial={{ y: "800%", opacity: 0 }}
          animate={{
            y: 0,
            transition: { duration: 2, delay: 2 },
            opacity: 1,
          }}
        >
          <img src="/name.svg"></img>
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
        <Nav />
      </motion.div>
      <motion.div
        initial={{ y: "800%", opacity: 0 }}
        animate={{
          y: 0,
          transition: { duration: 3, delay: 4 },
          opacity: 1,
          delay: 5,
        }}
        className="container d-flex flex-wrap"
      >
        <AnimatePresence>
          <Routes>
            <Route path={"/"} element={<Homepage />} />
            <Route path={"/contact"} element={<ContactForm />} />
            <Route path={"/about-me"} element={<AboutMe />} />
          </Routes>
        </AnimatePresence>
      </motion.div>
      <footer>
        <p>Created with 🧚🏼‍♀️</p>
      </footer>
    </Router>
  );
}

export default App;
