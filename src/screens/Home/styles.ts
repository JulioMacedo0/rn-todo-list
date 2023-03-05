import styled from "styled-components/native";

interface HeaderInfoProps {
  task: number;
}
export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme["gray-600"]};
  align-items: center;
  padding-bottom: 30px;
`;

export const HeaderInfo = styled.View<HeaderInfoProps>`
  padding-top: 56px;
  padding-bottom: 20px;
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: ${(props) => (props.task > 0 ? 0 : "1px")};
  border-color: ${(props) => props.theme["gray-400"]};
`;

export const ContainerInfo = styled.View`
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;

export const FlatListCotainer = styled.View`
  width: 90%;
`;
