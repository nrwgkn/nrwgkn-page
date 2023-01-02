import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="m-header">
      <ul>
        <li>
          <Link href="/">TOP</Link>
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

export { Header };
