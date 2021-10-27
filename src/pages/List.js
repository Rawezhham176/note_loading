import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";

const List = () => {
    return (
        <>
        <h3><Link to="/">Home</Link></h3>
        <h3><Link to="/about">About</Link></h3>
        <h3><Link to="/contact">Contact</Link></h3>
        </>
    )
}

export default List