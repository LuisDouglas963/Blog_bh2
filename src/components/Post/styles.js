import styled from "styled-components";

export const Container = styled.div`
  background: #c0c0c0;
  padding: 10px;
  height: 200px;
  width:2550px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  h2 {
    color: #1e1e1e;
    font-size: 1.5rem;
    text-align: left;
    padding-right: 10px;
  }

  p {
    border-left: 3px;
    font-size: 1.2rem;

    overflow: hidden;
  }
`;

export const ButtonArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
`;

export const Button = styled.div`
  border: none;
  background-color: transparent;
  cursor: pointer;

  svg {
    height: 20px;
    width: 20px;
  }
`;
