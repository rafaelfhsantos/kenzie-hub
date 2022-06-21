import { ButtonStyle } from "./style";

function Button({ children, ...rest }) {
  return <ButtonStyle {...rest}>{children}</ButtonStyle>;
}

export default Button;
