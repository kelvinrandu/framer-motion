
import './App.css';
import {motion} from 'framer-motion';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <motion.p animate={{ fontSize: 50}}>
          Edit <code>src/App.js</code> and save to reload.
        </motion.p>

      </header>
    </div>
  );
}

export default App;
