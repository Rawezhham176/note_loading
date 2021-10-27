import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./About";

const List = () => {
    return (
        <>
        <h3><Link to="/about">About</Link></h3>
        </>
    )
}

export default List