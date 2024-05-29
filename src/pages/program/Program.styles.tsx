import styled from "styled-components";

interface ILoadingProps {
  $isLoading?: boolean;
}

const width = "16vw";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 var(--p50) var(--p50);
  max-width: var(--max-content-width);
`;

export const Left = styled.div<ILoadingProps>`
  width: ${width};
  height: ${({ $isLoading = false }) =>
    $isLoading ? `calc(${width} * 1.5)` : "auto"};
  min-width: var(--carousel-item-min-width);
  min-height: var(--carousel-item-min-height);
  margin-right: var(--p50);
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const ImageLoading = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--grey-dark);
`;

export const Right = styled.div``;

export const Title = styled.h1<ILoadingProps>`
  font-size: var(--p40);
  width: ${({ $isLoading }) => ($isLoading ? width : "auto")};
  height: ${({ $isLoading }) => ($isLoading ? "var(--xxxl)" : "auto")};
  background-color: ${({ $isLoading }) =>
    $isLoading ? "var(--grey-dark)" : "var(--background)"};
  margin-bottom: ${({ $isLoading }) => ($isLoading ? "var(--s)" : 0)};
`;

export const Details = styled.ul<ILoadingProps>`
  display: flex;
  flex-direction: row;
  width: ${({ $isLoading }) => ($isLoading ? `calc(${width} * 2)` : "auto")};
  height: ${({ $isLoading }) => ($isLoading ? "var(--xxxl)" : "auto")};
  background-color: ${({ $isLoading }) =>
    $isLoading ? "var(--grey-dark)" : "var(--background)"};
  margin-bottom: ${({ $isLoading }) => ($isLoading ? "var(--s)" : 0)};
`;

export const Detail = styled.li`
  margin-right: var(--xs);
  white-space: nowrap;
  margin-bottom: var(--p40);
`;

export const Description = styled.p<ILoadingProps>`
  color: var(--white);
  width: ${({ $isLoading }) => ($isLoading ? `calc(${width} * 3)` : "auto")};
  height: ${({ $isLoading }) => ($isLoading ? `calc(${width} / 2)` : "auto")};
  background-color: ${({ $isLoading }) =>
    $isLoading ? "var(--grey-dark)" : "var(--background)"};
`;
