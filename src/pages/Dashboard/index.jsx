import { Container, NavBar, Header, Techs, List } from "./style";
import Button from "../../components/Button";
import { GoPlus } from "react-icons/go";
import Card from "../../components/Card";
import { useState, useEffect } from "react";
import Modal from "../../components/Modal";
import api from "../../Services";
import { Redirect, useHistory } from "react-router-dom";

function Dashboard({ autenticado, setAutenticado }) {
  const [user] = useState(JSON.parse(localStorage.getItem("@KenzieHub:user")));
  const [open, setOpen] = useState(false);
  const [techs, setTechs] = useState([]);
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState("");
  const [titulo, setTitulo] = useState("");

  function loadPage() {
    api.get(`/users/${user.id}`).then((response) => {
      response && setTechs(response.data.techs);
    });
  }
  useEffect(() => {
    loadPage();
  }, []);

  function handleOpen() {
    setOpen(true);
  }
  const history = useHistory();
  function logout() {
    localStorage.removeItem("@KenzieHub:token");
    localStorage.removeItem("@KenzieHub:user");
    setAutenticado(false);
    return history.push("/");
  }
  if (!autenticado) {
    return <Redirect to="/" />;
  }
  return (
    <>
      {open && (
        <Modal
          setOpen={setOpen}
          loadPage={loadPage}
          edit={edit}
          id={id}
          setEdit={setEdit}
          titulo={titulo}
        />
      )}
      <Container open={!!open}>
        <NavBar>
          <h1>Kenzie Hub</h1>
          <Button onClick={logout}>Sair</Button>
        </NavBar>
        <Header>
          <h3>Olá, {user.name}</h3>
          <span>{user.course_module}</span>
        </Header>
        <Techs>
          <h4>Tecnologias</h4>
          <Button onClick={handleOpen}>
            <GoPlus />
          </Button>
        </Techs>
        <List>
          {techs &&
            techs.map((elem) => (
              <Card
                key={elem.id}
                id={elem.id}
                title={elem.title}
                status={elem.status}
                setOpen={setOpen}
                setEdit={setEdit}
                setId={setId}
                setTitulo={setTitulo}
              />
            ))}
        </List>
      </Container>
    </>
  );
}
export default Dashboard;
