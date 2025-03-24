import Link from "next/link";
import React, { useState } from "react";

const AppHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="c-header">
      <div
        className={`c-header__toggle${isOpen ? " isMenuOpen" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      />
      <ul>
        <li>
          <Link href="/">HOME</Link>
        </li>
        <li>
          <Link href="/about">ABOUT</Link>
        </li>
        <li>
          <Link href="/feature">FEATURE</Link>
        </li>
        <li>
          <Link href="/practice">PRACTICE</Link>
        </li>
        <li>
          <Link href="/works">WORKS</Link>
        </li>
      </ul>
    </header>
  );
};

export { AppHeader };
