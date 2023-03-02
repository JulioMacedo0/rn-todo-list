import React from "react";

import Svg, { Image } from "react-native-svg";
import Logo from "../../../assets/Logo.svg";
import * as S from "./styles";

export const Header = () => {
  return (
    <S.Container>
      <Logo width={110} height={32} />
    </S.Container>
  );
};
