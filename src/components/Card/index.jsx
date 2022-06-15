import { BsTrash } from "react-icons/bs";
import { Container } from "./style";

import api from "../../Services";
import { useState } from "react";

function Card({ id, title, status, loadPage }) {
  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token"))
  );

  function deleteItem() {
    api
      .delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => loadPage());
  }
  return (
    <Container>
      <p>{title}</p>
      <div>
        <span>{status}</span>
        <BsTrash onClick={deleteItem} />
      </div>
    </Container>
  );
}
export default Card;
