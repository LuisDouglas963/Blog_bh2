import { createContext, useState } from "react";
import FormModal from "../components/FormModal";
import api from "../Services/api";

export const PostContext = createContext();

export function PostContextProvider({ children }) {
  const [openFormModal, setOpenFormModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState(false);

  function handleAdd() {
    setOpenFormModal(true);
  }

  function handleClose() {
    if (title) {
      setTitle("");
    }
    if (description) {
      setDescription("");
    }

    setOpenFormModal(false);
  }

  function titleHandle(event) {
    setTitle(event.target.value);
  }

  function descriptionHandle(event) {
    setDescription(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const post = {
      title,
      description,
    };

    if (id) {
      api.put(`update/${id}`, post);
    } else {
      api.post("create", post);
    }

    setOpenFormModal(false);
  }

  function handleEdit(postId, postTitle, postDescription) {
    setTitle(postTitle);
    setDescription(postDescription);
    setId(postId);

    setOpenFormModal(true);
  }
  function hadleDelete(id) {
    api.delete(`delete/${id}`);
  }

  return (
    <PostContext.Provider
      value={{
        handleAdd,
        handleClose,
        title,
        setTitle,
        description,
        setDescription,
        titleHandle,
        descriptionHandle,
        handleSubmit,
        handleEdit,
        id,
        setId,
        hadleDelete,
      }}
    >
      {children}
      {openFormModal && <FormModal />}
    </PostContext.Provider>
  );
}
