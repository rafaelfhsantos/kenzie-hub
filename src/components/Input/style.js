import styled from "styled-components";

export const InputStyled = styled.input`
  display: block;
  background-color: #343b41;
  color: ${(props) => (props.desabilitado ? "#868E96" : "#f8f9fa")};
  border: none;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 8px 13px;
  width: 100%;
  height: 40px;
  &::placeholder {
    color: #868e96;
  }
`;

export const LabelStyled = styled.label`
  display: block;
  color: #f8f9fa;
  font-family: "Inter", sans-serif;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: left;
  @media (min-width: 370px) {
  }
`;

export const SpanStyled = styled.span`
  color: #f00;
  font-size: 12px;
  margin-left: 20px;
`;

export const DivStyled = styled.div`
  display: flex;
  align-items: center;
  margin: 21px 0 10px 0;
`;
