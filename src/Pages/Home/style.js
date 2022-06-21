import styled from "styled-components";

export const Container = styled.div`
  max-width: 780px;
  margin: 0 auto 0 auto;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #121214;
  margin-top: 40px;
  margin-left: auto;
  @media (max-width: 420px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const DivTecnologias = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #121214;
  margin-top: 40px;
  margin-left: auto;
  @media (max-width: 370px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const H2 = styled.h2`
  color: #f8f9fa;
  font-size: 16px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
`;

export const ButtonAdd = styled.button`
  background-color: #212529;
  color: #f8f9fa;
  border-radius: 4px;
  border: none;
  padding: 5px 10px;
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: center;
  &:hover {
    background-color: #343b41;
    cursor: pointer;
  }
`;

export const DivTech = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #121214;
  color: #f8f9fa;
  border: none;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 20px 20px;
  width: 100%;
  height: 40px;
  margin-bottom: 16px;
  &:hover {
    cursor: pointer;
    background-color: #343b41;
  }
`;

export const Modal = styled.div`
  display: ${(props) => props.displayModal}; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;
export const ModalContent = styled.div`
  position: relative;
  background-color: #212529;
  margin: auto;
  padding: 0;
  /* border: 1px solid #888; */
  border: none;
  width: 80%;
  max-width: 370px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s;
  @-webkit-keyframes animatetop {
    from {
      top: -300px;
      opacity: 0;
    }
    to {
      top: 0;
      opacity: 1;
    }
  }

  @keyframes animatetop {
    from {
      top: -300px;
      opacity: 0;
    }
    to {
      top: 0;
      opacity: 1;
    }
  }
`;

export const CloseModal = styled.span`
  color: white;
  float: right;

  font-size: 16px;
  font-weight: 600;

  &:hover,
  &:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const ModalHeader = styled.div`
  padding: 10px 16px;
  background-color: #343b41;
  color: white;
`;

export const ModalBody = styled.div`
  padding: 0px 16px 32px 16px;
`;

export const DivButtons = styled.div`
  margin-top: 20px;
  width: 100%;
`;

export const ButtonSalvar = styled.button`
  background-color: #ff577f;
  width: 60%;
  margin-right: 10%;
  color: #fff;
  border-radius: 4px;
  border: none;
  padding: 5px 16px;
  font-size: 10px;
  font-weight: 600;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: center;
  &:hover {
    background-color: #ff427f;
    cursor: pointer;
  }
`;

export const ButtonExcluir = styled.button`
  background-color: #868e96;
  width: 30%;
  color: #f8f9fa;
  border-radius: 4px;
  border: none;
  padding: 5px 16px;
  font-size: 10px;
  font-weight: 600;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: center;
  &:hover {
    background-color: #343b41;
    cursor: pointer;
  }
`;
