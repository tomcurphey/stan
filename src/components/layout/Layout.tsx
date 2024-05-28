import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../navbar";
import * as S from "./Layout.styles";

export const Layout = () => {
  return (
    <S.Container>
      <Navbar />
      <Outlet />
    </S.Container>
  );
};
