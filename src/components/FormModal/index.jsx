import React, { useContext } from "react";
import { PostContext } from "../../contexts/PostContext";
import {
  Overlay,
  Container,
  Header,
  CloseIcon,
  FormContainer,
  FormMain,
  InputGroup,
  Footer,
  CheckIcon,
} from "./styles";

export default function FormModal() {
  const {
    handleClose,
    title,
    titleHandle,
    description,
    descriptionHandle,
    handleSubmit,
  } = useContext(PostContext);

  return (
    <Overlay>
      <Container>
        <Header>
          <strong>Adicionar postagem</strong>
          <button type="button" onClick={handleClose}>
            <CloseIcon />
          </button>
        </Header>
        <FormContainer onSubmit={handleSubmit}>
          <FormMain>
            <InputGroup>
              <label htmlFor="title">Titulo</label>
              <input
                className="title"
                id="title"
                type="text"
                value={title}
                onChange={titleHandle}
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="description">Descrição</label>
              <textarea
                className="description"
                id="description"
                type="text"
                value={description}
                onChange={descriptionHandle}
              />
            </InputGroup>
          </FormMain>
          <Footer>
            <button type="submit">
              <CheckIcon />
            </button>
          </Footer>
        </FormContainer>
      </Container>
    </Overlay>
  );
}
