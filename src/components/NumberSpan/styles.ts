import styled from "styled-components/native";

export const Container = styled.View`
  width: 25px;
  height: 19px;
  border-radius: 9999px;
  background-color: ${(props) => props.theme["gray-400"]};
  align-items: center;
  justify-content: center;
  font-size: 12px;
  line-height: 14.52px;
`;

export const Text = styled.Text`
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: ${(props) => props.theme["gray-100"]};
`;
