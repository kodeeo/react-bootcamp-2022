import Header from './components/Header/index.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Header />
        <h1>Hello World</h1>
        <ul> 
          <li>Local Web Server</li>
          <li>Live Reloading</li>
          <li>CSS Live Reloading</li>
          <li>Javascript, CSS Bundling</li>
        </ul>
      </header>
    </div>
  );
}


export default App;

// Babel =>  JSX 
// ES6 import - export 
// Functional Components
// DOM Tree

