import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  height: 50px;
  filter: drop-shadow(0 0 5px rgba(31, 31, 31, 0.1));
  bottom: 0;
`;

export const NavSlot = styled.div`
  flex-basis: 15%;
  text-align: center;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
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
  bottom: 35px;
  background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
  box-shadow: 0 10px 6px -6px #777;
  z-index: 1;
  transition: 0.3s all;
  &:hover {
    bottom: 40px;
    transition: 0.3s all;
  }
`;
