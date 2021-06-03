
import './App.css';
import {motion} from 'framer-motion';

function App() {
  return (
    <div className="App">
      <motion.header className="App-header" 
      animate={{ rotateZ: 180, opacity:0.2, marginTop: 200}}>
       
        <motion.p animate={{ fontSize: 50, color: '#ff2994', x: 100, y: -100}}>
          Edit <code>src/App.js</code> and save to reload.
        </motion.p>

      </motion.header>
    </div>
  );
}

export default App;
