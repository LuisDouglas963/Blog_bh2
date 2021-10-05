import styled from "styled-components";
import { IoAdd } from "react-icons/io5";

export const AddPostButton = styled.button`
  list-style: none;
  border: 5px solid #ffffff;
  background-color: rgba(0, 0, 0, 0.04);

  padding: 10px;
  height: 50px;
  width: 500px;
  cursor: pointer;

  font-size:16px;
  font-weight:700;
  

  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const AddIcon = styled(IoAdd)`
  stroke: #ffffff;
  width: 64px;
  height: 64px;
`;
