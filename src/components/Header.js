import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <div className={classes.header}>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName={classes.active}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName={classes.active}>
            About
          </NavLink>
        </li>
        <li className={classes.logo}>
          <NavLink to="/">
            <img src={logo} height="60px" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" activeClassName={classes.active}>
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName={classes.active}>
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
