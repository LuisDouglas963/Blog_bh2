import styled from "styled-components";

import { IoClose, IoCheckmark } from "react-icons/io5";

export const Overlay = styled.div`
  background: rgba(242, 243, 245, 0.6);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background: #ffffff;
  width: 100%;
  height: 100%;
  max-width: 850px;
  max-height: 650px;
  padding: 2em 3em;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.08);
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Header = styled.header`
 display:flex;
 justify-content:space-between;
 align-items: center;

 width: 100%;
 height: 40px;

 color: #1e1e1e;
 background-color:transparent;
 padding:0;
 font-weight:700;

 font-size:18px;

button {
    /* max-height:25px; */
    height: 25px;
    width: 25px;
    border-radius: 8px;
    border: none;
    background:#e4605e;
    cursor: pointer;
}

`;
export const FormContainer = styled.form`
height:100%;
width:100%;

display:flex;
flex-direction:column;
justify-content: space-between;
gap:15px;


`;

export const FormMain = styled.main`
margin: auto 0;
display: flex;
flex-direction: column;
gap: 20px;

`;

export const InputGroup = styled.div`
 display: flex;
 flex-direction: column;
 gap:5px;

 label {
     font-size: 18px;
 }

 .title {
     color: #1e1e1e;
     border-color: #c0c0c0;
     border-radius: 5px;

     height: 40px;
     width: 780px;
     padding-left:10px;

     font-size:13px;

 }

 .description {
     color: #1e1e1e;
     border-color: #c0c0c0;
     border-radius: 5px;
     

     height: 250px;
     width: 780px;
     padding-left:10px;

     font-size:13px;
     padding: 10px


     
 }

`;
export const Footer = styled.footer`
display: flex;
justify-content: center;

button {
    align-self: center;
    background: #b4ec4b;
    border: none;
    border-radius: 8px;
    height: 25px;
    width: 155px;
    font-weight: 700;
    cursor: pointer;
    transition: opacity 0.2s;

    button:hover {
        opacity: 0.5;
    }
}

`;
export const CheckIcon = styled(IoCheckmark)` 
 color: black;
 width: 2.4em;
 height: 1.8em;
`;
export const CloseIcon = styled(IoClose)`
 width: 15px;
 height: 15px;  
`;
