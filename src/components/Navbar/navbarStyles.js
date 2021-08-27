import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  position: fixed;
  width: 100%;
  height: 55px;
  filter: drop-shadow(0 0 5px rgba(31, 31, 31, 0.1));
  bottom: 0;
  background: white;
  z-index: 9999;
  ul {
    list-style-type: none;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    padding: 0;
    margin: 0;
    li {
      a {
        font-family: "Poppins", sans-serif;
        font-size: 11px;
        letter-spacing: 1px;
        text-decoration: none;
        color: black;
        line-height: 1;
        vertical-align: middle;
        margin: 5px 8px;

        display: flex;
        align-items: center;
        border-radius: 3em;
        padding: 0.75em 1.25em;
        transition: 0.6s ease-in-out;

        span {
          display: inline-block;
          overflow: hidden;
          max-width: 0;
          opacity: 0;
          padding-left: 0.5em;
          transform: translate3d(-0.5em, 0, 0);
          transition: opacity 0.6s, max-width 0.6s, transform 0.6s;
        }
        &.active {
          color: white;
          background-color: black;

          span {
            opacity: 1;
            max-width: 50px;
            text-transform: capitalize;
            margin-left: 0.5em;
          }
        }

        svg {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
`;

export const NavSlot = styled.div`
  flex-basis: 15%;
  text-align: center;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavSlotLeftRadius = styled(NavSlot)`
  border-top-left-radius: 15px;
`;

export const NavSlotRightRadius = styled(NavSlot)`
  border-top-right-radius: 15px;
`;

export const Curve = styled(NavSlot)`
  flex-basis: auto !important;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff'%3E%3Cpath d='M99,0A36.33,36.33,0,0,0,70,15,25,25,0,0,1,30,15,36.33,36.33,0,0,0,1,0H0V50H100V0Z'/%3E%3C/svg%3E");
  background-repeat: no-no-repeat;
  background-size: cover;
  background-position: center;
  width: 100px;
`;

export const Links = styled(NavLink)`
  width: 35px;
  height: 35px;
  line-height: 1.5;
  align-items: center;
  color: #aab2bd;
  border-radius: 50rem;
  /* padding: 0.5rem 0.5rem; */
  transition: 0.3s all;
  &.active {
    color: #2575fc;
  }
  &:hover {
    transition: 0.3s all;
    background: rgba(31, 31, 31, 0.1);
  }
`;

export const FloatingButton = styled(Links)`
  position: fixed;
  width: 50px;
  height: 50px;
  line-height: 3;
  text-align: center;
  color: #ffce54;
  border-radius: 50%;
  bottom: 10px;
  box-shadow: 0 10px 6px -6px #777;
  z-index: 1;
  transition: 0.3s all;
  &:hover {
    bottom: 15px;
    transition: 0.3s all;
  }
`;

export const NavTop = styled.div`
  position: fixed;
  height: 53px;
  width: 100%;
  top: 0;
  background: white;
  padding: 0 15px;
  filter: drop-shadow(0 0 5px rgba(31, 31, 31, 0.1));

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
