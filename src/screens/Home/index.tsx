import React, { useContext } from "react";
import * as S from "./styles";
import { View, Text, Switch } from "react-native";
import { ThemeContext, ThemeType } from "../../styles/themes/Theme";

export const Home = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  const isDarkMode = theme === ThemeType.dark;

  return (
    <S.Container>
      <Switch value={isDarkMode} onValueChange={toggleTheme} />
      <S.Text>Hello</S.Text>
    </S.Container>
  );
};
