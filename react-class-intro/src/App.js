import Header from './components/Header/index.js';
import './App.css';

function App() {
  const name = "Zahidul Hossain";
  const users = [
    {
      id: 1,
      name: "Kawser"
    },
    {
      id: 2,
      name: "Arshad"
    },
    {
      id: 3,
      name: 'Emon'
    }
  ]

  function add(x,y) {
    return x + y
  }

  function clickAgain(x, y) {
    alert(`Hello Click Again ${add(x, y)}`)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1> {name} </h1>

        <ul>
          {
            users.map((user) => (
              <li>{user.name}</li>
            ))
          }
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

