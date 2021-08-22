import React, { useState } from "react";
import { Container, Label, InputCustome } from "./inputStyles";

const Input = ({ type, label, ...rest }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };
  const { id, name } = rest;
  return (
    <Container>
      <InputCustome
        type={type}
        id={id}
        name={name}
        onChange={handleChange}
        value={value}
        placeholder={label}
      />
      <Label>{label}</Label>
    </Container>
  );
};

export default Input;
