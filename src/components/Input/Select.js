import React from "react";
import styled from "styled-components";
import { Container } from "./inputStyles";

const Label = styled.div`
  color: #3949ab;
  font-weight: normal;
  opacity: 0.75;

  padding-left: 2px;
  pointer-events: none;
  text-shadow: none;
  text-transform: capitalize;
  transform-origin: left top;
  transform: scale(0.9) translate3d(0, 5px, 0);
  transition: 200ms ease all;
`;

const SelectBox = styled.select`
  border-radius: 0;
  display: flex;
  font-size: 100%;
  line-height: 25px;
  text-shadow: none;
  background: transparent;

  border: 0;
  border-bottom: 1.5px solid rgba(0, 0, 0, 0.15);
  color: #000;
  flex: 1 1 auto;
  order: 2;

  &:focus {
    outline: 0;
  }
`;
const Option = styled.option`
  &::selection {
    color: #3949ab;
  }
`;

const Select = () => {
  return (
    <Container>
      <Label>Status</Label>
      <SelectBox>
        <Option disabled selected value="">
          -- select --
        </Option>
        <Option value="1">Masuk</Option>
        <Option value="2">Pulang</Option>
      </SelectBox>
    </Container>
  );
};

export default Select;
