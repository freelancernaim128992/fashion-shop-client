import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
