import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

export const Input = styled.input`
  width: 12em;
  height: 12em;
  border: none;
  padding-bottom: 5px;
  background: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  cursor: pointer;

    ::-webkit-color-swatch-wrapper {
    padding: 0;
  }
  ::-webkit-color-swatch {
    border-radius: 100%;
    border: none;
  }

  @media (max-width: 780px) {
    width: 8em;
    height: 8em;
  }
`;

export const Datalist = styled.datalist`
  color: white !important;
`;

export const ButtonRed = styled.button`
  background-color: red;
  border: none;
  border-radius: 12px;
  color: white;
  padding: 0.5em 2em;
`;

export const AddCategory = styled.button`
  background-color: red;
  border: none;
  border-radius: 12px;
  color: white;
  padding: 0.5em 2em;

  @media (max-width: 780px) {
    align-self: center;
  }
`;

export const CloseButton = styled(FaTimes)`
  font-size: 20px;
  z-index: 10;
  cursor: pointer;
`;
