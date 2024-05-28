import React from "react";
import * as S from "./Program.styles";
import { useParams } from "react-router-dom";

export const Program = () => {
  const { id } = useParams<{ id: string }>();
  return <S.Container>Program: {id}</S.Container>;
};
