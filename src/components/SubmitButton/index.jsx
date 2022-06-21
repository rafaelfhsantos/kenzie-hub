import { SubmitButtonStyled } from "./style";

function SubmitButton({ children, ...rest }) {
  return <SubmitButtonStyled {...rest}>{children}</SubmitButtonStyled>;
}

export default SubmitButton;
