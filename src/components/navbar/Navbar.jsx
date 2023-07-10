"use client";

import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import DarkModeToggle from "../darkModeToggle/DarkModeToggle";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/">IamBells</Link>
      <div className={styles.links}>
        <DarkModeToggle />
        <Link className={styles.link} href="/">
          Home
        </Link>
        <Link className={styles.link} href="/portfolio">
          Portfolio
        </Link>
        <Link className={styles.link} href="/blog">
          Blog
        </Link>
        <Link className={styles.link} href="/about">
          About
        </Link>
        <Link className={styles.link} href="/contact">
          Contact
        </Link>
        <Link className={styles.link} href="/dashboard">
          Dashboard
        </Link>
        <button
          className={styles.logout}
          onClick={() => {
            console.log("logged out");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
