import React, { useState } from "react";

import * as S from "./styles";
import { Trash } from "phosphor-react-native";
interface CardProps {
  text: string;
}
export const Card = ({ text }: CardProps) => {
  const [isChecked, setChecked] = useState(false);
  return (
    <S.Container>
      <S.CheckBox
        value={isChecked}
        onValueChange={() => setChecked(!isChecked)}
        color={isChecked ? "#5E60CE" : undefined}
      />
      <S.Text isCheck={isChecked}>Teste testando</S.Text>
      <Trash size={22} color="#808080" />
    </S.Container>
  );
};
