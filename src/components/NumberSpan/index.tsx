import * as S from "./styles";

interface NumberSpanProps {
  number: number;
}
export const NumberSpan = ({ number }: NumberSpanProps) => {
  return (
    <S.Container>
      <S.Text>{number}</S.Text>
    </S.Container>
  );
};
