import React from "react";
import * as S from "./Home.styles";
import { Carousel } from "../../components/carousel/Carousel";

export const Home = () => {
  return (
    <S.Container>
      <Carousel />
    </S.Container>
  );
};
