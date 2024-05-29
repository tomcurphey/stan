import React from "react";
import * as S from "./Navbar.styles";
import { r } from "../../utils/routes";
import logo from "../../assets/icons/logo.svg";
import { useLocation, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const links = [r.home, r.tvShows, r.movies];

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLLIElement>,
    path: string
  ) => {
    if (event.key === "Enter") {
      navigate(path);
    }
  };

  return (
    <S.Container>
      <S.Nav>
        <S.NavItem className="logo">
          <img src={logo} alt="Logo" width="145" height="45" />
        </S.NavItem>
        <S.NavItem>
          {links.map((l, idx) => (
            <S.ListItem
              key={idx}
              tabIndex={0}
              onKeyDown={(e) => handleKeyDown(e, l.path)}
            >
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
