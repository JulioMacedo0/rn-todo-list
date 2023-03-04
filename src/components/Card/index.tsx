import React, { useState } from "react";

import * as S from "./styles";
import { Trash } from "phosphor-react-native";
import { useTask } from "../../context/tasksContext";
import { Pressable } from "react-native";
interface CardProps {
  text: string;
  id: string;
  isDone: boolean;
}
export const Card = ({ text, id, isDone }: CardProps) => {
  const { toggleTask, removeTask } = useTask();

  return (
    <S.Container>
      <S.CheckBox
        value={isDone}
        onValueChange={() => toggleTask(id)}
        color={isDone ? "#5E60CE" : undefined}
      />
      <S.Pressable onPress={() => toggleTask(id)}>
        <S.Text isCheck={isDone}>{text}</S.Text>
      </S.Pressable>
      <Pressable onPress={() => removeTask(id)}>
        <Trash size={22} color="#808080" />
      </Pressable>
    </S.Container>
  );
};
