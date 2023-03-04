import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { v4 as uuid } from "uuid";
import "react-native-get-random-values";
interface TaskContextType {
  tasks: Task[];
  task: string;
  addTask: (title: string) => void;
  handleOnChangeInput: (title: string) => void;
  removeTask: (uuid: string) => void;
  toggleTask: (uuid: string) => void;
}

interface TaskContextProps {
  children: ReactNode;
}
interface Task {
  uuid: string;
  title: string;
  isDone: boolean;
  createdAt: number;
}
const TaskContext = createContext({} as TaskContextType);

export const TaskContextProvider = ({ children }: TaskContextProps) => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      uuid: uuid(),
      title: "Type Script",
      isDone: false,
      createdAt: Date.now(),
    },
    {
      uuid: uuid(),
      title: "React Native is amazing",
      isDone: false,
      createdAt: Date.now(),
    },
  ]);
  const [task, setTask] = useState("");

  const handleOnChangeInput = useCallback((title: string) => {
    setTask(title);
  }, []);

  const addTask = useCallback((title: string) => {
    if (title.trim()) {
      setTasks((prevTasks) => [
        ...prevTasks,
        { uuid: uuid(), title, isDone: false, createdAt: Date.now() },
      ]);
      setTask("");
    }
  }, []);

  const removeTask = useCallback((uuid: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.uuid !== uuid));
  }, []);

  const toggleTask = useCallback((uuid: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.uuid === uuid ? { ...task, isDone: !task.isDone } : task
      )
    );
  }, []);

  const value = useMemo(() => {
    return {
      task,
      tasks,
      addTask,
      removeTask,
      toggleTask,
      handleOnChangeInput,
    };
  }, [task, tasks, addTask, removeTask, toggleTask, handleOnChangeInput]);

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export const useTask = () => useContext(TaskContext);
