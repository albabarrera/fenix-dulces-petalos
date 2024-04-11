import React from "react";

import "./Header.css";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <Link to="/">
        <p>🌷 Dulces Pétalos</p>
      </Link>
    </header>
  );
};
