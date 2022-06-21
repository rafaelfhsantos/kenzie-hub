import { MainStyled } from "./style";

function Main({ children, ...rest }) {
  return <MainStyled {...rest}>{children}</MainStyled>;
}

export default Main;
