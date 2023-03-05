import React, { useState } from "react";

import * as S from "./styles";
import { Trash } from "phosphor-react-native";
import { useTask } from "../../context/tasksContext";
import { useTheme } from "styled-components/native";
interface CardProps {
  text: string;
  id: string;
  isDone: boolean;
}
export const Card = ({ text, id, isDone, ...props }: CardProps) => {
  const { toggleTask, removeTask } = useTask();

  const theme = useTheme();

  console.log(props);
  return (
    <S.Container>
      <S.Pressable onPress={() => toggleTask(id)}>
        <S.CheckBox
          value={isDone}
          onValueChange={() => toggleTask(id)}
          color={isDone ? `${theme.pupleDark}` : undefined}
        />
        <S.Text isCheck={isDone}>{text}</S.Text>
      </S.Pressable>
      <S.PressableNotFlex onPress={() => removeTask(id)}>
        <Trash size={22} color="#808080" />
      </S.PressableNotFlex>
    </S.Container>
  );
};
