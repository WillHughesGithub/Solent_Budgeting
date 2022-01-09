import React from "react";
import { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";
import { Menu, NavLinks, MobileIcon, NavMenu, Img, Logo } from "./styled";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuToggle = () => {
    return setOpen(!open);
  };

  return (
    <Menu>
      <MobileIcon onClick={menuToggle}>
        {open ? <FaTimes /> : <FaBars />}
      </MobileIcon>
      <NavMenu onClick={menuToggle} open={open}>
        <NavLinks to="/">Transations</NavLinks>
        <NavLinks to="/overview">Overview</NavLinks>
        <NavLinks to="/categories">Categories</NavLinks>
      </NavMenu>
      <Logo to='/'>
      <Img src="https://www.logolynx.com/images/logolynx/a3/a3f7d628555942ac4659064dad2ea385.jpeg" />
      </Logo>
    </Menu>
  );
};

export default Navbar;
