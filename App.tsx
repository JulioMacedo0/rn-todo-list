import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { Header } from "./src/components/Header";
import { TaskContextProvider } from "./src/context/tasksContext";

import { Home } from "./src/screens/Home";
import { ThemeProvider } from "./src/styles/themes/Theme";
export default function App() {
  return (
    <>
      <TaskContextProvider>
        <ThemeProvider>
          <StatusBar style="light" />
          <Header />
          <Home />
        </ThemeProvider>
      </TaskContextProvider>
    </>
  );
}
