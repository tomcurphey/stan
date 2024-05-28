import styled from "styled-components";

interface IContainerProps {
  $isLoading?: boolean;
}

export const Container = styled.div<IContainerProps>`
  overflow: hidden;
  overflow-x: ${({ $isLoading }) => ($isLoading ? "hidden" : "scroll")};
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  border: 2px solid var(--background);
  padding-left: var(--p50);

  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }

  &:focus,
  &:focus-visible {
    border: 2px solid var(--blue);
  }

  &:focus-visible {
    outline: none;
    box-shadow: none;
  }
`;

export const Items = styled.div`
  display: flex;
  flex-direction: row;
`;
