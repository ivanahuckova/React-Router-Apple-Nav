import React from 'react';
import styled from 'styled-components';
import { NavLink, Route } from 'react-router-dom';
import '../App.css';

import Mac from './screens/Mac';
const StyledNavContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledNavBar = styled.div`
  width: 100vw;
  height: 50px;
  background-color: #313131;
  color: white;
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
  background-color: white;
  color: black;
  display: flex;
`;

export default function NavWrapper() {
  return (
    <StyledNavContainer>
      <StyledNavBar>
        <NavLink activeClassName="active-link" to="/">
          <img src="http://www.clker.com/cliparts/i/s/H/f/4/T/apple-logo-white.svg" alt="Apple logo" />
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
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/VisualEditor_-_Icon_-_Search-big_-_white.svg/2000px-VisualEditor_-_Icon_-_Search-big_-_white.svg.png" alt="Search Icon" />
        </NavLink>
        <NavLink activeClassName="active-link" to="/search">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/VisualEditor_-_Icon_-_Close_-_white.svg/2000px-VisualEditor_-_Icon_-_Close_-_white.svg.png" alt="Shop Icon" />
        </NavLink>
      </StyledNavBar>
      <StyledSubNav>
        <Route path="/mac" render={pr => <Mac {...pr} />} />
      </StyledSubNav>
    </StyledNavContainer>
  );
}
