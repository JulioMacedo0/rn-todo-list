import { StatusBar } from "expo-status-bar";
import React from "react";
import { Header } from "./src/components/Header";

import { Home } from "./src/screens/Home";
import { ThemeProvider } from "./src/styles/themes/Theme";
export default function App() {
  return (
    <>
      <ThemeProvider>
        <StatusBar style="light" />
        <Header />
        <Home />
      </ThemeProvider>
    </>
  );
}
