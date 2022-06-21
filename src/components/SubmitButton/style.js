import styled from "styled-components";

export const SubmitButtonStyled = styled.button`
  width: 100%;
  padding: 8px;
  margin-top: 16px;

  font-size: 13px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0em;

  color: #ffffff;
  background-color: ${(props) => (props.cinza ? "#868E96" : "#ff577f")};

  border: none;

  border-radius: 4px;

  &:hover {
    background-color: ${(props) => (props.cinza ? "#343B41" : " #ff427f")};
    cursor: pointer;
  }
`;
