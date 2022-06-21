import { HeadlineStyled } from "./style";

function Headline({ children, ...rest }) {
  return <HeadlineStyled {...rest}>{children}</HeadlineStyled>;
}

export default Headline;
