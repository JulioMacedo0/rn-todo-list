import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.background};
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: ${(props) => props.theme.normal};
`;
