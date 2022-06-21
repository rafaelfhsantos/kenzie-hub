import styled from "styled-components";

export const MainStyled = styled.main`
  background-color: #212529;
  padding: 34px 18px;
  margin-top: 30px;

  @media (min-width: ${(props) => (props.isHome ? "780px" : "370px")}) {
    max-width: ${(props) => (props.isHome ? "780px" : "370px")};
  }
`;
