import { createContext, ReactNode, useContext } from "react";

interface TaskContextType {}

interface TaskContextProps {
  children: ReactNode;
}
const TaskContext = createContext({} as TaskContextType);

export const TaskContextProvider = ({ children }: TaskContextProps) => {
  return <TaskContext.Provider value={{}}>{children}</TaskContext.Provider>;
};

export const useTask = () => useContext(TaskContext);
