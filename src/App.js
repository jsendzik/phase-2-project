import './App.css';
import Home from './Home.js'
import NavBar from './NavBar.js';

function App() {
  return (
    <>
    <header>
      <NavBar />
    </header>
    <div className="App">
      <Home />
    </div>
    </>
  );
}

export default App;
