import H1 from "../../components/H1";
import Headline from "../../components/Headline";
import Input from "../../components/Input";
import H1Logo from "../../components/Logo";
import Main from "../../components/Main";
import Nav from "../../components/Nav";
import SubmitButton from "../../components/SubmitButton";
import Select from "../../components/Select";
import Button from "../../components/Button";
import { Container } from "./style";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import React from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";

function Cadastro() {
  const history = useHistory();

  localStorage.getItem("@kenziehub") && history.push("/");

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome é obrigatório"),
    email: yup.string().required("Email é obrigatório").email("Email inválido"),
    senha: yup
      .string()
      .required("Senha é obrigatória")
      .min(6, "Mínimo 6 caracteres"),
    confirmarSenha: yup
      .string()
      .required("Confirmar senha é obrigatória")
      .oneOf([yup.ref("senha"), null], "As senhas não conferem"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  function onSubmitFunction(data) {
    const id = toast.loading("Por favor aguarde...", { theme: "dark" });
    axios
      .post("https://kenziehub.herokuapp.com/users", {
        name: data.name,
        email: data.email,
        password: data.senha,
        bio: "bio",
        contact: "contact",
        course_module: data.modulo,
      })
      .then((response) => {
        toast.update(id, {
          render: "Conta criada com sucesso!",
          type: "success",
          isLoading: false,
          autoClose: 4000,
          closeOnClick: true,
          theme: "dark",
        });
        history.push("/login");
      })
      .catch((error) => {
        toast.update(id, {
          render: "Ops! Algo deu errado...",
          type: "error",
          isLoading: false,
          autoClose: 4000,
          closeOnClick: true,
          theme: "dark",
        });
      });
  }

  const modulos = [
    "Primeiro Módulo",
    "Segundo Módulo",
    "Terceiro Módulo",
    "Quarto Módulo",
    "Quinto Módulo",
    "Sexto Módulo",
  ];

  return (
    <Container>
      <ToastContainer
        position="top-right"
        autoClose={5000}
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
      <Nav>
        <H1Logo></H1Logo>
        <Button onClick={() => history.push("/login")}> Voltar</Button>
      </Nav>
      <Main>
        <H1>Crie sua conta</H1>
        <Headline>Rapido e grátis, vamos nessa</Headline>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            placeholder="Digite aqui seu nome"
            type="text"
            register={register("name")}
            error={errors.name?.message}
          >
            Nome
          </Input>
          <Input
            placeholder="Digite aqui seu email"
            type="text"
            register={register("email")}
            error={errors.email?.message}
          >
            Email
          </Input>
          <Input
            placeholder="Digite aqui sua senha"
            type="password"
            register={register("senha")}
            error={errors.senha?.message}
          >
            Senha
          </Input>
          <Input
            placeholder="Confirme aqui sua senha"
            type="password"
            register={register("confirmarSenha")}
            error={errors.confirmarSenha?.message}
          >
            Confirmar Senha
          </Input>
          <Select
            options={modulos}
            placeholder="Escolha o módulo"
            register={register("modulo")}
          ></Select>
          <SubmitButton type="submit">Cadastrar</SubmitButton>
        </form>
      </Main>

      <form></form>
    </Container>
  );
}

export default Cadastro;
