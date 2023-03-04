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
      <S.Pressable onPress={() => toggleTask(id)}>
        <S.CheckBox
          value={isDone}
          onValueChange={() => toggleTask(id)}
          color={isDone ? "#5E60CE" : undefined}
        />
        <S.Text isCheck={isDone}>{text}</S.Text>
      </S.Pressable>
      <S.PressableNotFlex onPress={() => removeTask(id)}>
        <Trash size={22} color="#808080" />
      </S.PressableNotFlex>
    </S.Container>
  );
};
