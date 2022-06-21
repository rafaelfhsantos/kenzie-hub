import H1 from "../../components/H1";
import Headline from "../../components/Headline";
import Input from "../../components/Input";
import H1Logo from "../../components/Logo";
import Main from "../../components/Main";
import Nav from "../../components/Nav";
import SubmitButton from "../../components/SubmitButton";
import { Container } from "./style";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import React from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();

  localStorage.getItem("@kenziehub") && history.push("/");

  const formSchema = yup.object().shape({
    email: yup.string().required("Email é obrigatório"),
    senha: yup.string().required("Senha é obrigatória"),
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
      .post("https://kenziehub.herokuapp.com/sessions", {
        email: data.email,
        password: data.senha,
      })
      .then((response) => {
        toast.update(id, {
          render: "Login realizado com sucesso!",
          type: "success",
          isLoading: false,
          autoClose: 1000,
          closeOnClick: true,
          theme: "dark",
        });
        window.localStorage.setItem(
          "@kenziehub",
          JSON.stringify({
            token: response.data.token,
            user: response.data.user,
          })
        );

        setTimeout(() => {
          history.push("/");
        }, "1000");
      })
      .catch((error) => {
        toast.update(id, {
          render: "Usuário e senha inválidos",
          type: "error",
          isLoading: false,
          autoClose: 4000,
          closeOnClick: true,
          theme: "dark",
        });
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
      <Nav>
        <H1Logo></H1Logo>
        {/* <Button>Voltar</Button> */}
      </Nav>
      <Main>
        <H1>Login</H1>

        <form onSubmit={handleSubmit(onSubmitFunction)}>
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

          <SubmitButton type="submit">Entrar</SubmitButton>
        </form>
        <Headline marginTop="30px">Rapido e grátis, vamos nessa</Headline>
        <SubmitButton cinza onClick={() => history.push("/cadastro")}>
          Cadastre-se
        </SubmitButton>
      </Main>
    </Container>
  );
}

export default Login;
