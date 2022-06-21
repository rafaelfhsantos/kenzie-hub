import H1 from "../../components/H1";
import Headline from "../../components/Headline";
import Input from "../../components/Input";
import H1Logo from "../../components/Logo";
import Main from "../../components/Main";
import Nav from "../../components/Nav";
import SubmitButton from "../../components/SubmitButton";
import Button from "../../components/Button";
import {
  ButtonAdd,
  ButtonExcluir,
  ButtonSalvar,
  CloseModal,
  Container,
  DivButtons,
  DivTech,
  DivTecnologias,
  H2,
  Header,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "./style";

import axios from "axios";
import React from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import Select from "../../components/Select";
import { useEffect } from "react";

function Home() {
  const [displayModal, setDisplayModal] = useState("none");
  const [modalInputValue, setModalInputValue] = useState("");
  const [modalSelectValue, setModalSelectValue] = useState("Iniciante");
  const [typeModal, setTypeModal] = useState(true);

  function selectHandler(value) {
    setModalSelectValue(value);
  }

  function inputHandler(value) {
    setModalInputValue(value);
  }

  const history = useHistory();

  !localStorage.getItem("@kenziehub") && history.push("/login");

  const dadosUsuario = JSON.parse(localStorage.getItem("@kenziehub"));

  const [techsList, setTechsList] = useState(dadosUsuario.user.techs);

  const [techId, setTechId] = useState("");

  useEffect(() => {
    getTechs();
  }, []);

  function getTechs() {
    axios
      .get(`https://kenziehub.herokuapp.com/users/${dadosUsuario.user.id}`)
      .then((response) => {
        setTechsList(response.data.techs);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function sair() {
    localStorage.removeItem("@kenziehub");
    toast("Redirecionando", {
      theme: "dark",
      autoClose: 1000,
    });
    setTimeout(() => {
      history.push("/login");
    }, "2000");
  }

  function addTech() {
    setTypeModal(true);
    setDisplayModal("block");
    setModalInputValue("");
    setModalSelectValue("Iniciante");
  }

  function addTechSalvar() {
    const id = toast.loading("Cadastrando tecnologia...", { theme: "dark" });
    axios
      .post(
        "https://kenziehub.herokuapp.com/users/techs",
        {
          title: modalInputValue,
          status: modalSelectValue,
        },
        {
          headers: {
            Authorization: `Bearer: ${dadosUsuario.token}`,
          },
        }
      )
      .then((response) => {
        toast.update(id, {
          render: "Tecnologia cadastrada!",
          type: "success",
          isLoading: false,
          autoClose: 4000,
          closeOnClick: true,
          theme: "dark",
        });
        getTechs();
        setDisplayModal("none");
      })
      .catch((err) => {
        toast.update(id, {
          render: "Ops! Algo deu errado...",
          type: "error",
          isLoading: false,
          autoClose: 4000,
          closeOnClick: true,
          theme: "dark",
        });
        getTechs();
      });
  }

  function editarTech(tech) {
    setTypeModal(false);
    setDisplayModal("block");
    setModalInputValue(tech.title);
    setModalSelectValue(tech.status);
    setTechId(tech.id);
  }

  function editarTechSalvar() {
    const id = toast.loading("Salvando tecnologia...", { theme: "dark" });
    axios
      .put(
        `https://kenziehub.herokuapp.com/users/techs/${techId}`,
        {
          status: modalSelectValue,
        },
        {
          headers: {
            Authorization: `Bearer: ${dadosUsuario.token}`,
          },
        }
      )
      .then((response) => {
        toast.update(id, {
          render: "Tecnologia Atualizada!",
          type: "success",
          isLoading: false,
          autoClose: 4000,
          closeOnClick: true,
          theme: "dark",
        });
        getTechs();
        setDisplayModal("none");
      })
      .catch((err) => {
        toast.update(id, {
          render: "Ops! Algo deu errado...",
          type: "error",
          isLoading: false,
          autoClose: 4000,
          closeOnClick: true,
          theme: "dark",
        });
        getTechs();
      });
  }

  function editarTechExcluir() {
    const id = toast.loading("Salvando tecnologia...", { theme: "dark" });
    axios
      .delete(`https://kenziehub.herokuapp.com/users/techs/${techId}`, {
        headers: {
          Authorization: `Bearer: ${dadosUsuario.token}`,
        },
      })
      .then((response) => {
        toast.update(id, {
          render: "Tecnologia Excluída!",
          type: "success",
          isLoading: false,
          autoClose: 4000,
          closeOnClick: true,
          theme: "dark",
        });
        getTechs();
        setDisplayModal("none");
      })
      .catch((err) => {
        toast.update(id, {
          render: "Ops! Algo deu errado...",
          type: "error",
          isLoading: false,
          autoClose: 4000,
          closeOnClick: true,
          theme: "dark",
        });
        getTechs();
      });
  }

  return (
    <Container>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
      <Modal
        displayModal={displayModal}
        onClick={(e) => e.target === e.currentTarget && setDisplayModal("none")}
      >
        <ModalContent>
          <ModalHeader>
            <CloseModal onClick={() => setDisplayModal("none")}>
              &times;
            </CloseModal>
            <H2>Cadastrar Tecnologia</H2>
          </ModalHeader>
          <ModalBody>
            {typeModal ? (
              <Input
                onChange={(e) => inputHandler(e.target.value)}
                placeholder="Nome"
                value={modalInputValue}
              >
                Nome
              </Input>
            ) : (
              <Input
                desabilitado={true}
                placeholder="Nome"
                value={modalInputValue}
              >
                Nome
              </Input>
            )}

            <Select
              onChange={(e) => selectHandler(e.target.value)}
              value={modalSelectValue}
              options={["Iniciante", "Intermediário", "Avançado"]}
            ></Select>
            {typeModal ? (
              <SubmitButton onClick={addTechSalvar}>
                Cadastrar Tecnologia
              </SubmitButton>
            ) : (
              <DivButtons>
                <ButtonSalvar onClick={editarTechSalvar}>Salvar</ButtonSalvar>
                <ButtonExcluir onClick={editarTechExcluir}>
                  Excluir
                </ButtonExcluir>
              </DivButtons>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
      <Nav>
        <H1Logo></H1Logo>
        <Button onClick={sair}> Sair</Button>
      </Nav>
      <Header>
        <H1>Seja bem vindo, {dadosUsuario.user.name}!</H1>
        <Headline>{dadosUsuario.user.course_module}</Headline>
      </Header>
      <DivTecnologias>
        <H2>Tecnologias</H2>
        <ButtonAdd onClick={addTech}>+</ButtonAdd>
      </DivTecnologias>
      <Main isHome>
        {techsList.map((tech) => {
          return (
            <DivTech key={tech.id} onClick={() => editarTech(tech)}>
              <H2>{tech.title}</H2>
              <Headline>{tech.status}</Headline>
            </DivTech>
          );
        })}
      </Main>
    </Container>
  );
}

export default Home;
