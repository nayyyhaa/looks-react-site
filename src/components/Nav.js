import React from "react";
import { Link } from "react-router-dom";
//styled
import styled from "styled-components";

const Nav = () => {
  return (
    <StyledNav>
      <h1 id="title-text">
        <Link to="/">Looks.</Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About Us</Link>
        </li>
        <li>
          <Link to="/work">Our Work</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  padding: 1rem 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #282828;

  #title-text {
    font-family: "Lobster", cursive;
    flex: 1;
    a {
      font-size: 2rem;
    }
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex: 1;

    li {
      list-style: none;
    }
  }
`;
export default Nav;
