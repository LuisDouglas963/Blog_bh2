import React, { useContext } from "react";
import { IoTrashBin, IoPencil } from "react-icons/io5";

import { PostContext } from "../../contexts/PostContext.js";

import { Container, ButtonArea, Button } from "./styles.js";

export default function Post({ id, title, description }) {
  const { handleEdit, hadleDelete } = useContext(PostContext);

  return (
    <>
      <Container>
        <h2>{title}</h2>
        <p>{description}</p>
        <ButtonArea>
          <Button onClick={() => handleEdit(id, title, description)}>
            <IoPencil />
          </Button>
          <Button onClick={() => hadleDelete(id)}>
            <IoTrashBin />
          </Button>
        </ButtonArea>
      </Container>
    </>
  );
}
