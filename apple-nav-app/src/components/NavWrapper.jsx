import React from 'react';
import styled from 'styled-components';
import { NavLink, Route } from 'react-router-dom';
import '../App.css';

import shopIcon from '../icons/shop-icon.svg';
import searchIcon from '../icons/search-icon.svg';
import appleIcon from '../icons/apple-icon.svg';

import Mac from './screens/Mac';
import Ipad from './screens/Ipad';

const StyledNavContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledNavBar = styled.div`
  width: 100vw;
  padding: 0 10vw;
  box-sizing: border-box;
  height: 50px;
  background-color: #313131;
  color: white;
  font-size: 0.9rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  img {
    height: 25px;
  }

  a {
    text-decoration: none;
    color: white;
    &:hover {
      color: darkgray;
    }
  }
`;

const StyledSubNav = styled.div`
  background-color: #f6f6f6;
  color: black;
  display: flex;
  width: 100vw;
`;

export default function NavWrapper() {
  return (
    <StyledNavContainer>
      <StyledNavBar>
        <NavLink activeClassName="active-link" to="/">
          <img src={appleIcon} alt="Apple logo" />
        </NavLink>
        <NavLink activeClassName="active-link" to="/mac">
          Mac
        </NavLink>
        <NavLink activeClassName="active-link" to="/ipad">
          iPad
        </NavLink>
        <NavLink activeClassName="active-link" to="/iphone">
          iPhone
        </NavLink>
        <NavLink activeClassName="active-link" to="/watch">
          Watch
        </NavLink>
        <NavLink activeClassName="active-link" to="/tv">
          TV
        </NavLink>
        <NavLink activeClassName="active-link" to="/music">
          Music
        </NavLink>
        <NavLink activeClassName="active-link" to="/support">
          Support
        </NavLink>
        <NavLink activeClassName="active-link" to="/search">
          <img src={searchIcon} alt="Search Icon" />
        </NavLink>
        <NavLink activeClassName="active-link" to="/search">
          <img src={shopIcon} alt="Shop Icon" />
        </NavLink>
      </StyledNavBar>
      <StyledSubNav>
        <Route exact path="/mac" render={pr => <Mac {...pr} />} />
        <Route exact path="/ipad" render={pr => <Ipad {...pr} />} />
      </StyledSubNav>
    </StyledNavContainer>
  );
}
