import React from "react";
import * as S from "./Navbar.styles";
import { r } from "../../utils/routes";
import logo from "../../assets/icons/logo.svg";
import { Link } from "react-router-dom";

export const Navbar = () => {
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
              <S.StyledLink to={l.path}>{l.label}</S.StyledLink>
            </S.ListItem>
          ))}
        </S.NavItem>
      </S.Nav>
    </S.Container>
  );
};
