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
    </div>
  );
}

export default App;
