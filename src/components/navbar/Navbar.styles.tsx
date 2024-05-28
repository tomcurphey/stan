import styled from "styled-components";

export const Container = styled.div``;

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

export const ListItem = styled.div`
  margin-right: var(--p40);
  .link {
    font-size: var(--l);
  }
`;
