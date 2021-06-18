import React, { useContext } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { pathname } = useLocation();
  const history = useHistory();
  const { authenticated, handleLogout } = useContext(AuthContext);
  const getRightNav = () => {
    if (authenticated) {
      return (
        <Menu.Menu position="right">
          <Link to="/update_profile">
            <Menu.Item>Profile</Menu.Item>
          </Link>
          <Menu.Item onClick={() => handleLogout(history)}>Logout</Menu.Item>
        </Menu.Menu>
      );
    } else {
      return (
        <Menu.Menu position="right">
          <Link to="/register">
            <Menu.Item active={pathname === "/register"}>Register</Menu.Item>
          </Link>
          <Link to="/login">
            <Menu.Item active={pathname === "/login"}>Login</Menu.Item>
          </Link>
        </Menu.Menu>
      );
    }
  };
  return (
    <Menu pointing secondary>
      <Link to="/">
        <Menu.Item active={pathname === "/"}>Home</Menu.Item>
      </Link>
      <Link to="/my_courses">
        <Menu.Item active={pathname === "/my_courses"}>My Courses</Menu.Item>
      </Link>
      {getRightNav()}
    </Menu>
  );
};

export default Navbar;
