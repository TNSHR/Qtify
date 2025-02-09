import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import SearchBar from "../Search/SearchBar";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <SearchBar search="Search a song of your choice" />
      <Button>Give Feedback</Button> {/* Pass children directly */}
    </nav>
  );
};

export default Navbar;
