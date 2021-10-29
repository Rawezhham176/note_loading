import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import News from "../pages/News";

const List = () => {
    return (
        <>
        <h3 className="liste"><Link to="/">Home</Link></h3>
        <h3 className="liste"><Link to="/about">About</Link></h3>
        <h3 className="liste"><Link to="/contact">Contact</Link></h3>
        <h3 className="liste"><Link to="/news">News</Link></h3>
        </>
    )
}

export default List