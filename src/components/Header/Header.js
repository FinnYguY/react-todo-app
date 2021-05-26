import React from "react";
import "./Header.scss";

export default function Header() {
  return (
    <p className="header">
      TodoList using{" "}
      <a className="link code" href="https://reactjs.org/">
        React
      </a>
    </p>
  );
}
