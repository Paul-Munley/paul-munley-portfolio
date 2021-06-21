import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import logo from "../assets/circle-cropped.png";

const Header = () => {
  return (
    <div className={classes.header}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <img src={logo} height="60px" />
        </li>
        <li>
          <NavLink to="/portfolio">Portfolio</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
