import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme["gray-600"]};
  align-items: center;
`;

export const HeaderInfo = styled.View`
  padding-top: 56px;
  padding-bottom: 20px;
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1;
  border-color: ${(props) => props.theme["gray-400"]};
`;

export const ContainerInfo = styled.View`
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;
