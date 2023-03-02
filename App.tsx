import { StatusBar } from "expo-status-bar";
import React from "react";

import { Home } from "./src/screens/Home";
import { ThemeProvider } from "./src/styles/themes/Theme";
export default function App() {
  return (
    <>
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </>
  );
}
