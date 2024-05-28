import { Link } from "react-router-dom";
import styled from "styled-components";

interface IContainerProps {
  $isActive?: boolean;
  $useKeys?: boolean;
}

export const Container = styled.div<IContainerProps>`
  width: 100%;
  border: 2px solid
    ${({ $isActive = false, $useKeys = false }) =>
      $useKeys && $isActive ? "var(--blue)" : "var(--background)"};
  padding: var(--xxs) var(--xxs) var(--t) var(--xxs);
  margin: var(--t);
  outline: none;
  box-shadow: none;

  &:focus,
  &:focus-visible {
    border-color: ${({ $isActive = false, $useKeys = false }) =>
      $useKeys && $isActive ? "var(--blue)" : "var(--background)"};
  }

  &:focus-visible {
    outline: none;
  }

  &:hover {
    border-color: var(--blue);
  }
`;

export const StyledLink = styled(Link)``;

export const Image = styled.img`
  max-width: 207px;
  max-height: 307px;
`;
