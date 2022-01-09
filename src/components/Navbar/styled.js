import styled from "styled-components";
import { Link } from "react-router-dom";

export const Menu = styled.menu`
  margin-top: 0;
  height: 54px;
  width: 100%;
  border-style: none none solid none;
  border-color: #ff0000;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  background-color: #ff0000;
  z-index: 10;
  padding: 0;
  position: fixed;
  justify-content: space-between;

  @media screen and (max-width: 780px) {
    transition: 0.8s all ease;
    justify-content: initial;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 780px) {
    display: inline-block;
    position: absolute;
    top: -2vw;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.6rem;
    cursor: pointer;
    color: white;
  }
`;

export const NavMenu = styled.ul`
  padding: 0;

  @media (max-width: 780px) {
    transition: 0.8s all ease;
    display: flex;
    flex-direction: column;
    position: fixed;
    text-align: center;
    font-weight: bolder;
    transition: all 0.9s ease-in-out;
    width: fit-content;
    height: fit-content;
    z-index: 5;
    top: ${({ open }) => (open ? "41px" : "-100%")};
    background-color: RED;
    padding: 0px 16px;
  }
`;

export const Logo = styled(Link)`
  padding-left: 25px;
  @media (max-width: 780px) {
    flex: auto;
  }
`;

export const NavLinks = styled(Link)`
  font-size: 16px;
  line-height: 24px;
  color: white;
  text-decoration: none;
  height: 64px;
  margin: 20px 20px 0 0;

  @media (max-width: 780px) {
    display: flex;
    color: white;
    align-items: center;
    justify-content: center;
    margin: 0;

    &:hover {
      transform: scale(1.3);
      transition: 0.5s all ease;
    }
  }
`;

export const Img = styled.img`
  width: 3em;
`;
