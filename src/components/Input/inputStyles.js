import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  position: relative;
`;

export const Label = styled.label`
  color: #999;
  font-weight: normal;
  opacity: 0.75;
  order: 1;

  padding-left: 2px;
  pointer-events: none;
  text-shadow: none;
  text-transform: capitalize;
  transform-origin: left top;
  transform: scale(1) translate3d(0, 22px, 0);
  transition: 200ms ease all;
`;

export const InputCustome = styled.input`
  appearance: none;
  border-radius: 0;
  display: flex;
  font-size: 100%;
  line-height: 25px;
  text-shadow: none;

  border: 0;
  border-bottom: 1.5px solid rgba(0, 0, 0, 0.15);
  color: #000;
  flex: 1 1 auto;
  order: 2;
  &::placeholder {
    color: transparent;
  }
  &:focus {
    outline: 0;
  }
  &:not(:focus) {
    color: #000;
  }
  &:focus + ${Label} {
    color: #3949ab;
    opacity: 1;
    transform: scale(0.8) translate3d(0, 5px, 0);
  }
  &:not(:placeholder-shown) + ${Label} {
    color: #3949ab;
    opacity: 1;
    transform: scale(0.8) translate3d(0, 5px, 0);
  }
`;
