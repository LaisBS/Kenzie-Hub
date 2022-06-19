import { useForm } from "react-hook-form";
import { Redirect, useHistory } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, Form } from "./style";
import Input from "../../components/Input";
import Button from "../../components/Button";
import api from "../../Services";
import { toast } from "react-toastify";

function Login({ autenticado, setAutenticado }) {
  const schema = yup.object().shape({
    email: yup.string().email("Email invalido").required("Campo obrigatorio!"),
    password: yup
      .string()
      .min(6, "Minimo de 6 digitos")
      .required("Campo obrigatorio!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data) => {
    api
      .post("/sessions", data)
      .then((resp) => {
        const { token, user } = resp.data;

        localStorage.setItem("@KenzieHub:token", JSON.stringify(token));
        localStorage.setItem("@KenzieHub:user", JSON.stringify(user));
        setAutenticado(true);

        return history.push("/dashboard");
      })
      .catch((err) =>
        toast.error("Email ou senha inválidos", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      );
  };
  const history = useHistory();
  function redirecionar() {
    history.push("/cadastro");
  }
  if (autenticado) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <Container>
      <h1>Kenzie Hub</h1>
      <Form onSubmit={handleSubmit(onSubmitFunction)}>
        <h3>Login</h3>
        <Input
          register={register}
          label="Email"
          placeholder="Digite seu e-mail"
          name="email"
          error={errors.email?.message}
        />
        <Input
          register={register}
          label="Senha"
          placeholder="Digite sua senha"
          type="password"
          name="password"
          error={errors.password?.message}
        />
        <Button type="submit">Entrar</Button>
        <span>Ainda não possui uma conta?</span>
        <Button greySchema onClick={() => redirecionar()}>
          Cadastre-se
        </Button>
      </Form>
    </Container>
  );
}
export default Login;
