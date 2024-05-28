import React from "react";
import { Link, Outlet } from "react-router-dom";
import * as S from "./Navbar.styles";
import { r } from "../../utils/routes";
import logo from "../../assets/icons/logo.svg";

export const Navbar = () => {
  const links = [r.home, r.tvShows, r.movies];
  return (
    <S.Container>
      <S.Nav>
        <S.NavItem className="logo">
          <img src={logo} alt="Logo" width="145" height="45" />
        </S.NavItem>
        <S.NavItem>
          {links.map((l) => (
            <S.ListItem>
              <Link className="link" to={l.path}>
                {l.label}
              </Link>
            </S.ListItem>
          ))}
        </S.NavItem>
      </S.Nav>
      <hr />
      <Outlet />
    </S.Container>
  );
};
