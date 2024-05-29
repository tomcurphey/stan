import { Link } from "react-router-dom";
import styled from "styled-components";

interface IContainerProps {
  $isActive?: boolean;
  $isLoading?: boolean;
  $useKeys?: boolean;
}

const width = "16vw";

export const Container = styled.div<IContainerProps>`
  flex: 0 0 auto;
  border: 2px solid
    ${({ $isActive = false, $useKeys = false }) =>
      $useKeys && $isActive ? "var(--blue)" : "var(--background)"};
  padding: var(--xxs) var(--xxs) var(--t) var(--xxs);
  margin: var(--t);
  outline: none;
  box-shadow: none;
  width: ${width};
  height: ${({ $isLoading = false }) =>
    $isLoading ? `calc(${width} * 1.5)` : "auto"};
  min-width: var(--carousel-item-min-width);
  min-height: var(--carousel-item-min-height);
  background-color: ${({ $isLoading = false }) =>
    $isLoading ? "var(--grey-dark)" : "var(--background)"};

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

export const StyledLink = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;
