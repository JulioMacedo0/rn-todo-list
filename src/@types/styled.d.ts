import { darkTheme } from "../styles/themes/darkTheme";
import "styled-components/native";

type ThemeType = typeof darkTheme;

declare module "styled-components/native" {
  export interface DefaultTheme extends ThemeType {}
}
