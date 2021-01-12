import './App.css';
import Navbar from "./Navbar";
import Home from "./Home";
function App() {
  const num = 30 ; 

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>

      <p>I liked this { num } times</p>
    </div>
  );
}

export default App;
