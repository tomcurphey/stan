import React, { forwardRef } from "react";
import * as S from "./Item.styles";
import { CarouselData } from "../../types";

interface IItemProps {
  data: CarouselData;
  isLoading?: boolean;
  isActive: boolean;
  tabIndex: number;
  $useKeys: boolean;
  onKeyDown: (e: React.KeyboardEvent<HTMLDivElement>) => void;
}

export const Item = forwardRef<HTMLDivElement, IItemProps>(
  ({ data, isLoading, isActive, tabIndex, $useKeys, onKeyDown }, ref) => {
    if (isLoading) return <S.Container>Loading</S.Container>;

    return (
      <S.Container
        $isActive={isActive}
        tabIndex={tabIndex}
        onKeyDown={onKeyDown}
        aria-current={isActive ? "true" : undefined}
        aria-selected={isActive ? "true" : undefined}
        ref={ref}
        $useKeys={$useKeys}
      >
        <S.StyledLink to={`/${data.id}`}>
          <S.Image src={data.image} alt={data.title} />
        </S.StyledLink>
      </S.Container>
    );
  }
);

Item.displayName = "Item";
