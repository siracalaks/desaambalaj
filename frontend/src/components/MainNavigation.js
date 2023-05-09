import { Form, NavLink, useRouteLoaderData } from "react-router-dom";
import { useState } from "react";

import classes from "./MainNavigation.module.css";
import Logo from "../assets/logo.png";

function MainNavigation() {
  const token = useRouteLoaderData("root");
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/">
              <img src={Logo} alt="Logo" className={classes.navbarLogo} />
            </NavLink>
          </li>
          <div className={`${classes.linkParent} ${showMenu ? classes.showMenu : ''}`}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/events"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Events
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/connact"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                Connact
              </NavLink>
            </li>
            {!token && (
              <li>
                <NavLink
                  to="/auth"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  Admin
                </NavLink>
              </li>
            )}
            {token && (
              <li>
                <Form action="/logout" method="post">
                  <button className={classes.logout}>Logout </button>
                </Form>
              </li>
            )}
          </div>
          <li className={classes.mobileMenuButton}>
            <button onClick={toggleMenu}>☰</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
