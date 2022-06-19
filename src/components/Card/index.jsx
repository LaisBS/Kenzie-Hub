import { Container } from "./style";

function Card({ id, title, status, setOpen, setEdit, setId, setTitulo }) {
  function handleOpen() {
    setEdit(true);
    setOpen(true);
    setId(id);
    setTitulo(title);
  }
  return (
    <Container onClick={handleOpen}>
      <p>{title}</p>
      <div>
        <span>{status}</span>
      </div>
    </Container>
  );
}
export default Card;
