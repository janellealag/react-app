import React, { Component } from "react";

// Stateless functional component
// can use this if no states, some preferred using functions
// cannot use lifecycle hooks in stateless func component

const NavBar = ({ totalCounters }) => {
  // destructuring, from props.totalCounters
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

// class NavBar extends Component {
//   render() {}
// }

export default NavBar;
