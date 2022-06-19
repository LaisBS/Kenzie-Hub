import { useForm } from "react-hook-form";
import { Redirect, useHistory } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, Form, Select, LabelSelect } from "./style";
import Input from "../../components/Input";
import Button from "../../components/Button";
import api from "../../Services";
import { toast } from "react-toastify";

function Cadastro({ autenticado }) {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatorio!"),
    email: yup.string().email("Email invalido").required("Campo obrigatorio!"),
    password: yup
      .string()
      .min(6, "Minimo de 6 digitos")
      .required("Campo obrigatorio!"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas são diferentes")
      .required("Campo obrigatorio!"),
    bio: yup.string().required("Campo obrigatorio!"),
    contact: yup.string().required("Campo obrigatorio!"),
    course_module: yup.string().required("Selecione uma ds opções"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();
  const onSubmitFunction = ({
    email,
    password,
    name,
    bio,
    contact,
    course_module,
  }) => {
    const user = {
      email,
      password,
      name,
      bio,
      contact,
      course_module,
    };
    api
      .post("/users", user)
      .then((_) => {
        toast.success("Conta criada com sucesso", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return history.push("/");
      })
      .catch((err) =>
        toast.error("Erro ao criar a conta, tente outro email", {
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

  function redirecionar() {
    history.push("/");
  }
  if (autenticado) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <Container>
      <section>
        <h1>Kenzie Hub</h1>
        <Button onClick={() => redirecionar()}>Voltar</Button>
      </section>
      <Form onSubmit={handleSubmit(onSubmitFunction)}>
        <h3>Crie sua conta</h3>
        <span>É rapido e grátis, vamos nessa</span>
        <Input
          register={register}
          label="Nome"
          placeholder="Digite seu Nome"
          name="name"
          error={errors.name?.message}
        />
        <Input
          register={register}
          label="Email"
          placeholder="Digite seu Email"
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
        <Input
          register={register}
          label="Confirmar senha"
          placeholder="Digite novamente sua senha"
          type="password"
          name="confirmPassword"
          error={errors.confirmPassword?.message}
        />
        <Input
          register={register}
          label="Bio"
          placeholder="Fale sobre você"
          name="bio"
          error={errors.bio?.message}
        />
        <Input
          register={register}
          label="Contato"
          placeholder="Opção de contato"
          name="contact"
          error={errors.contact?.message}
        />
        <LabelSelect>
          <label htmlFor="course_module">Selecione modúlo</label>
          {!!errors.course_module?.message && (
            <p> - {errors.course_module?.message}</p>
          )}
        </LabelSelect>
        <Select required {...register("course_module")}>
          <option></option>
          <option>Primeiro Módulo (M1)</option>
          <option>Segundo Módulo (M2)</option>
          <option>Terceiro Módulo (M3)</option>
          <option>Quarto Módulo (M4)</option>
          <option>Quinto Módulo (M5)</option>
          <option>Sexto Módulo (M6)</option>
        </Select>
        <Button type="submit">Entrar</Button>
      </Form>
    </Container>
  );
}
export default Cadastro;
