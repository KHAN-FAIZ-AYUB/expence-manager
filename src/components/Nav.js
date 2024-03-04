import React from "react";

const Nav = () => {
  const navItems = ["Home", "About", "Contact"];

  return (
    <div>
      <nav className="nav">
        <span>Expense Manager</span>
        {navItems.map((item, index) => (
          <NavBtn key={index} ele={item} />
        ))}
      </nav>
    </div>
  );
};

const NavBtn = ({ ele }) => {
  return (
    <div>
      <button className="nav-btn">{ele}</button>
    </div>
  );
};

export default Nav;
