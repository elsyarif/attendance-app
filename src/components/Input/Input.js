import React from "react";
import { Container, Label, InputCustome } from "./inputStyles";

const Input = ({ type, ...other }) => {
  return (
    <Container>
      <InputCustome type={type} other />
      <Label>Label</Label>
    </Container>
  );
};

export default Input;
