import styled from "styled-components/native";

interface TextProps {
  color: "blue" | "purple";
}

export const Text = styled.Text<TextProps>`
  font-weight: bold;
  font-size: 14px;
  color: ${(props) =>
    props.color == "blue" ? props.theme.blue : props.theme.puple};
`;
