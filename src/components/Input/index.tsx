import React from "react";

import * as S from "./styles";
import { PlusCircle } from "phosphor-react-native";
import { useTask } from "../../context/tasksContext";
export const Input = () => {
  const { handleOnChangeInput, addTask, task } = useTask();
  return (
    <S.Container>
      <S.Input
        value={task}
        onChangeText={(text) => handleOnChangeInput(text)}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
      />
      <S.Button onPress={() => addTask(task)}>
        <PlusCircle size={20} color="#F2F2F2" weight="bold" />
      </S.Button>
    </S.Container>
  );
};
