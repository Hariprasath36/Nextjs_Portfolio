// app/components/Navbar.tsx
"use client"; // Ensure this is included to use React hooks

import React, { useEffect, useState } from "react";
import Link from "next/link"; // Use Next.js Link
import { styles } from "../styles"; // Assuming you have a styles file
import { navLinks } from "../constants"; // Import navLinks

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    console.log("Navbar mounted");
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">Your Logo</Link>
      </div>
      <button onClick={toggleMenu} className={styles.menuToggle}>
        {isOpen ? "Close" : "Menu"}
      </button>
      <ul className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
        {navLinks.map((link) => (
          <li key={link.id}>
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
