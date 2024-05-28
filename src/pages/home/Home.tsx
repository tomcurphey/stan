import React from "react";
import * as S from "./Home.styles";
import { Carousel } from "../../components";

export const Home = () => {
  return (
    <S.Container data-testid="home-container">
      <Carousel />
    </S.Container>
  );
};
