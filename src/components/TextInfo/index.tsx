import * as S from "./styles";

interface TextInfoProps {
  text: string;
  color: "blue" | "purple";
}
export const TextInfo = ({ text, color }: TextInfoProps) => {
  return <S.Text color={color}>{text}</S.Text>;
};
