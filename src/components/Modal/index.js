import { LabelSelect, Select } from "../../pages/Cadastro/style";
import Button from "../Button";
import { Container } from "./style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../components/Input";
import api from "../../Services";

function Modal({ setOpen, loadPage }) {
  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatorio!"),
    status: yup.string().required("Selecione um!"),
  });

  const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));
  function fechar() {
    setOpen(false);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = ({ title, status }) => {
    api
      .post(
        "/users/techs",
        {
          title,
          status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => loadPage());

    return fechar();
  };

  return (
    <Container>
      <header>
        <h4>Cadastrar Tecnologia</h4>
        <h2 onClick={fechar}>x</h2>
      </header>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <Input
          placeholder="Digite sua tarefa"
          register={register}
          label="Nome"
          name="title"
          error={errors.title?.message}
        />

        <LabelSelect>
          <label htmlFor="status">Selecionar status</label>
        </LabelSelect>
        <Select required {...register("status")}>
          <option></option>
          <option>Iniciante</option>
          <option>Intermediario</option>
          <option>Avançado</option>
        </Select>
        <Button type="submit">Cadastrar Tecnologia</Button>
      </form>
    </Container>
  );
}

export default Modal;
