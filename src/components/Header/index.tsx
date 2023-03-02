import React from "react";

import Logo from "../../../assets/Logo.svg";
import { Input } from "../Input";
import * as S from "./styles";

export const Header = () => {
  return (
    <S.Container style={{ zIndex: 2 }}>
      <Logo width={110} height={32} />
      <Input />
    </S.Container>
  );
};
