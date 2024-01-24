// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: #333;
  padding: 15px;
  text-align: center;
`;

const NavbarList = styled.ul`
  list-style: none;
  padding: 0;
`;

const NavbarItem = styled.li`
  display: inline-block;
  margin-right: 20px;
`;

const NavbarLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: bold;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarList>
        <NavbarItem>
          <NavbarLink to="/">Home</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink to="/about">About</NavbarLink>
        </NavbarItem>
      </NavbarList>
    </NavbarContainer>
  );
};

export default Navbar;
