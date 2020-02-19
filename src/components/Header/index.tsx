import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import links from "./links.json";

export const Header = () => {
  const test = useSelector((state: any) => state.testReducer.test);

  return (
    <header>
      <nav>
        <div className="nav-wrapper container">
          <a href="!#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="hide-on-med-and-down">
            <li title="Home">
              <NavLink to="/" activeClassName="active-header-link">
                <i className="material-icons">home</i>
              </NavLink>
            </li>

            {links.map((item: any) => {
              const { link, text, icon } = item;

              return (
                <li key={icon} title={text}>
                  <NavLink to={link} activeClassName="active-header-link">
                    <i className="material-icons">{icon}</i>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <NavLink to="/" activeClassName="active-header-link">
            <i className="material-icons">home</i> Home
          </NavLink>
        </li>

        {links.map((item: any) => {
          const { link, text, icon } = item;

          return (
            <li key={icon}>
              <NavLink to={link} activeClassName="active-header-link">
                <i className="material-icons">{icon}</i> {text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </header>
  );
};
