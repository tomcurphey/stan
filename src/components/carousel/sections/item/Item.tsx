import React, { forwardRef } from "react";
import * as S from "./Item.styles";
import { CarouselData } from "../../../../assets/data/dataTypes";

interface IItemProps {
  data?: CarouselData;
  isActive?: boolean;
  tabIndex?: number;
  $isLoading?: boolean;
  $useKeys?: boolean;
  onKeyDown?: (e: React.KeyboardEvent<HTMLDivElement>) => void;
  onFocus?: () => void;
}

export const Item = forwardRef<HTMLDivElement, IItemProps>(
  (
    {
      data,
      isActive = false,
      tabIndex,
      $isLoading = false,
      $useKeys = false,
      onKeyDown,
      onFocus,
    },
    ref
  ) => {
    if ($isLoading || !data) return <S.Container $isLoading />;

    const handleFocus = () => {
      onFocus && onFocus();
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      onKeyDown && onKeyDown(e);
    };

    return (
      <S.Container
        $isActive={isActive}
        tabIndex={tabIndex}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
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
