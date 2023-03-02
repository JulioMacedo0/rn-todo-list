import React, { useContext, useState } from "react";
import * as S from "./styles";
import { ThemeContext, ThemeType } from "../../styles/themes/Theme";
import { TextInfo } from "../../components/TextInfo";
import { NumberSpan } from "../../components/NumberSpan";
import { Card } from "../../components/Card";

export const Home = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  const isDarkMode = theme === ThemeType.dark;

  return (
    <S.Container>
      <S.HeaderInfo>
        <S.ContainerInfo>
          <TextInfo text="Criadas" color="blue" />
          <NumberSpan number={"0"} />
        </S.ContainerInfo>
        <S.ContainerInfo>
          <TextInfo text="Concluídas" color="purple" />
          <NumberSpan number={"0"} />
        </S.ContainerInfo>
      </S.HeaderInfo>
      <Card text="Hello" />
    </S.Container>
  );
};
