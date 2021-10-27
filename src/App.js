import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';
import { Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
    </div>
  );
}

export default App;
