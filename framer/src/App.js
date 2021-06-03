import "./App.css";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <motion.div
        className="App"
        initial={{ opacity: 0 }}
        animate={{ rotate: 360, opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <motion.header
          className="App-header"
          animate={{ opacity: 0.2, marginTop: 200, scale: 1.5 }}
          transition={{ delay: 0.2 }}
        >
          <motion.p
            animate={{ fontSize: 50, color: "#c8efc8", x: 100, y: -100 }}
          >
            Edit <code>src/App.js</code> and save to reload.
          </motion.p>
        </motion.header>
      </motion.div>
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <button>add</button>
      </motion.div>
      <motion.div
        initial={{ y: -250 }}
        animate={{ y: -10 }}
        transition={{ delay: 0.2, type: 'spring',stiffness: 120 }}
      >
        <h1>spring me</h1>
      </motion.div>
    </>
  );
}

export default App;
