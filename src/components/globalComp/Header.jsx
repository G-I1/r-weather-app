import React from "react";

function Header() {
  return (
    <header className="main_header">
      <div
        className="logo"
        style={{
          color: "white",
          fontWeight: "900",
          margin: "0 0 0 1rem",
          fontSize: "1.5rem",
          cursor: "pointer",
        }}
      >
        G.I
      </div>
      <nav className="nav_bar">
        <ul className="nav_list">
          <li className="nav_list_elements">
            <a href="/weather">Weather</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header ;