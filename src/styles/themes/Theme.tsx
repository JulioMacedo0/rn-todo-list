import { createContext, ReactNode, useState } from "react";
import { ThemeProvider as ThemeProviderStyled } from "styled-components/native";
import { darkTheme } from "./darkTheme";
import { lightTheme } from "./lightTheme";
export enum ThemeType {
  light = "light",
  dark = "dark",
}

interface ThemeProviderProps {
  children: ReactNode;
}

const themes = {
  dark: darkTheme,
  light: lightTheme,
};

export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState(ThemeType.light);

  function toggleTheme() {
    if (theme == ThemeType.light) {
      setTheme(ThemeType.dark);
    } else {
      setTheme(ThemeType.light);
    }
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProviderStyled theme={themes[theme]}>
        {children}
      </ThemeProviderStyled>
    </ThemeContext.Provider>
  );
};
