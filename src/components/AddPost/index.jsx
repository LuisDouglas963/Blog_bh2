import React, { useContext } from "react";

import { PostContext } from "../../contexts/PostContext";

import { AddIcon, AddPostButton } from "./styles";

export default function AddPost() {
  const { handleAdd } = useContext(PostContext);

  return (
    <li>
      <AddPostButton onClick={handleAdd}>
      Criar Post
        <AddIcon/>
      </AddPostButton>
    </li>
  );
}
