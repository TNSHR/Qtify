import React from "react";
import "./Navbar.css";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import SearchBar from "../Search/SearchBar";


const Navbar = () => {
  return (
    <div>
        <nav className="navbar">
            
            <Logo />
            <SearchBar />
            <Button text="Give Feedback" />

            
            </nav>
      
    </div>

  );
};
export default Navbar;