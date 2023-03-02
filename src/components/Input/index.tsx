import React from "react";
import { Text } from "react-native";
import * as S from "./styles";
import { PlusCircle } from "phosphor-react-native";
export const Input = () => {
  return (
    <S.Container>
      <S.Input
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
      />
      <S.Button>
        <PlusCircle size={20} color="#F2F2F2" weight="bold" />
      </S.Button>
    </S.Container>
  );
};
