import styled from "styled-components/native";

export const Container = styled.View`
  width: 90%;
  height: 52px;
  position: absolute;
  bottom: -26px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  gap: 6px;
  z-index: 2;
`;

export const Input = styled.TextInput`
  border: 1px solid ${(props) => props.theme["gray-700"]};
  color: ${(props) => props.theme["gray-100"]};
  font-size: 16px;
  padding: 12px;
  border-radius: 6px;
  flex: 1;
  height: 100%;
  background-color: ${(props) => props.theme["gray-500"]};
`;

export const Button = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.blueDark};
  width: 52px;
  height: 52px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
`;
