import React from "react";
import { Link } from "react-router-dom";
import './Header.css';
export default function Header() {
  return (
    <header>
      <div className="header-title">ToDoApp</div>
      <ul className="header-links">
        <li className="header-link">
          <Link to="/">Home</Link>
        </li>
        <li className="header-link">
          <Link to="/About">About</Link>
        </li>
      </ul>
    </header>
  );
}
