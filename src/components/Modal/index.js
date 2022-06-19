import { LabelSelect, Select } from "../../pages/Cadastro/style";
import Button from "../Button";
import { Container } from "./style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../components/Input";
import api from "../../Services";

function Modal({ setOpen, loadPage, edit, id, setEdit, titulo }) {
  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatorio!"),
    status: yup.string().required("Selecione um!"),
  });

  const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));
  function fechar() {
    setOpen(false);
    setEdit(false);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = ({ status, title }) => {
    if (edit) {
      api
        .put(
          `/users/techs/${id}`,
          { status },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => loadPage());

      return fechar();
    }
    if (!edit) {
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
    }
  };

  function deleteItem() {
    api
      .delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => loadPage());
    return fechar();
  }
  return (
    <Container>
      <header>
        {edit ? <h4>Tecnologia Detalhes</h4> : <h4>Cadastrar Tecnologia</h4>}

        <h2 onClick={fechar}>x</h2>
      </header>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        {edit ? (
          <Input
            placeholder={titulo}
            register={register}
            label="Nome"
            name="title"
            error={errors.title?.message}
            readOnly
            defaultValue={titulo}
          />
        ) : (
          <Input
            placeholder="Digite sua tarefa"
            register={register}
            label="Nome"
            name="title"
            error={errors.title?.message}
          />
        )}

        <LabelSelect>
          <label htmlFor="status">Selecionar status</label>
        </LabelSelect>
        <Select required {...register("status")}>
          <option></option>
          <option>Iniciante</option>
          <option>Intermediario</option>
          <option>Avançado</option>
        </Select>
        <section>
          <Button type="submit">
            {edit ? <h4>Salvar Alterações</h4> : <h4>Cadastrar Tecnologia</h4>}
          </Button>
          {edit && (
            <Button onClick={deleteItem} greySchema>
              <h4>Excluir</h4>
            </Button>
          )}
        </section>
      </form>
    </Container>
  );
}
export default Modal;
