import styled from "styled-components";

export const HeadlineStyled = styled.p`
  color: #868e96;
  font-size: 12px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  margin-top: ${(props) => props.marginTop && props.marginTop};
`;
