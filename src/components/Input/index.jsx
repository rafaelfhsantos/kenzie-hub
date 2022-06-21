import { InputStyled, LabelStyled, SpanStyled, DivStyled } from "./style";

function Input({ children, register, error, ...rest }) {
  return (
    <>
      <DivStyled>
        <LabelStyled>{children}</LabelStyled>
        <SpanStyled>{error}</SpanStyled>
      </DivStyled>
      <InputStyled {...register} {...rest} />
    </>
  );
}

export default Input;
