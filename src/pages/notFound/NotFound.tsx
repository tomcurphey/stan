import React, { useEffect } from "react";
import * as S from "./NotFound.styles";
import { s } from "../../utils/strings";

export const NotFound = () => {
  return (
    <S.Container>
      <p className="errorMessage">{s.errorMessage}</p>
    </S.Container>
  );
};
