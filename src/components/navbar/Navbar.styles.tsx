import { Link } from "react-router-dom";
import styled from "styled-components";

interface IStyledLinkProps {
  $highlight: boolean;
}

export const Container = styled.div`
  padding: var(--p50);
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const NavItem = styled.ul`
  display: flex;
  flex-direction: row;

  &.logo {
    margin-right: var(--p80);
  }
`;

export const StyledLink = styled(Link)<IStyledLinkProps>`
  display: inline-block;
  padding: var(--s) var(--xl);
  color: ${({ $highlight }) => ($highlight ? "var(--white)" : "var(--grey)")};
  font-weight: var(--semibold);
  text-decoration: none;
  border: 2px solid transparent;
  border-radius: 4px;
`;

export const ListItem = styled.div`
  .link {
    font-size: var(--l);
  }

  &:hover,
  &:focus {
    background-color: var(--blue-dark);

    ${StyledLink} {
      color: var(--white);
    }
  }

  &:focus-visible {
    outline: 2px solid #0056b3;
    outline-offset: 2px;
    border: none; /* Remove border if any */
    box-shadow: none; /* Remove any box-shadow */
  }
`;
