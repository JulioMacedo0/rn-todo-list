import styled from "styled-components/native";
import box from "expo-checkbox";

interface TextProps {
  isCheck: boolean;
}

export const Container = styled.View`
  width: 100%;
  height: 64px;
  background-color: ${(props) => props.theme["gray-500"]};
  border: 1px solid ${(props) => props.theme["gray-400"]};
  flex-direction: row;
  gap: 8px;
  border-radius: 8px;
  align-items: center;
`;

export const CheckBox = styled(box)`
  border-radius: 999px;
  border-color: ${(props) => props.theme["blue"]};
`;

export const Text = styled.Text<TextProps>`
  flex: 1;
  color: ${(props) =>
    props.isCheck ? props.theme["gray-300"] : props.theme["gray-100"]};
  text-decoration: ${(props) => (props.isCheck ? "line-through" : null)};
`;

export const Pressable = styled.Pressable`
  padding: 12px 8px 12px 12px;
  flex: 1;
  height: 100%;
  align-items: center;
  gap: 6px;
  flex-direction: row;
`;

export const PressableNotFlex = styled(Pressable)`
  flex: 0.1;
`;
