import Link from "next/link";
import React, { useState } from "react";

const AppHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="m-header">
      <div
        className={`m-header__toggle${isOpen ? " isMenuOpen" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      />
      <ul className={`${isOpen ? "isMenuOpen" : ""}`}>
        <li>
          <Link href="/">HOME</Link>
        </li>
        <li>
          <Link href="/feature">FEATURE</Link>
        </li>
        <li>
          <Link href="/works">WORKS</Link>
        </li>
        <li>
          <Link href="/practice">PRACTICE</Link>
        </li>
      </ul>
    </header>
  );
};

export { AppHeader };
