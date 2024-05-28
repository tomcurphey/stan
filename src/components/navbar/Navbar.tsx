import React from "react";
import * as S from "./Navbar.styles";
import { r } from "../../utils/routes";
import logo from "../../assets/icons/logo.svg";
import { useLocation } from "react-router-dom";

export const Navbar = () => {
  const { pathname } = useLocation();

  console.log("location", location);
  const links = [r.home, r.tvShows, r.movies];
  return (
    <S.Container>
      <S.Nav>
        <S.NavItem className="logo">
          <img src={logo} alt="Logo" width="145" height="45" />
        </S.NavItem>
        <S.NavItem>
          {links.map((l, idx) => (
            <S.ListItem key={idx} tabIndex={0}>
              <S.StyledLink to={l.path} $highlight={pathname === l.path}>
                {l.label}
              </S.StyledLink>
            </S.ListItem>
          ))}
        </S.NavItem>
      </S.Nav>
    </S.Container>
  );
};
