import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  position: relative;
  height: 300px;
  width: 90%;
  border-radius: 10px;
  background: #fff;
  margin-top: 10px;

  border: 2px dashed #c2cdda;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 1;
  &.active {
    border: none;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const ImagePreview = styled.div`
  ${Wrapper} {
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  margin-top: -50px;
`;

export const Icon = styled.div`
  font-size: 100px;
  color: #9658fe;
  align-items: center;
`;
export const Text = styled.div`
  margin-top: -40px;
  ${Wrapper} {
    font-size: 20px;
    font-weight: 500;
    color: #5b5b7b;
  }
`;
export const Filename = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
  padding: 8px 0;
  font-size: 18px;
  color: #fff;
  background: linear-gradient(135deg, #3a8ffe 0%, #9658fe 100%);

  display: ${(props) => (props.image ? "flex" : "none")};
  flex-direction: column;
  text-align: center;
  font-size: small;
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UploadBtn = styled.button`
  margin-top: -70px;
  display: block;
  width: 50px;
  height: 50px;
  border: none;
  outline: none;
  border-radius: 25px;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  z-index: 99;
  background: linear-gradient(135deg, #3a8ffe 0%, #9658fe 100%);

  svg {
    font-size: 25px;
  }
`;

export const BtnCancel = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;

  border: 0;
  color: #fff;
  background: ${(props) =>
    props.image ? "#fff" : "linear-gradient(135deg, #3a8ffe 0%, #9658fe 100%)"};
  padding: 0.7em 0.8em;
  border-radius: 50%;
`;

export const ButtonSave = styled.button`
  padding: 0.7em 1.8em;
  margin-top: 15px;
  margin-bottom: 15px;
  border: 0;
  color: #fff;
  font-family: "Poppins";
  font-weight: 500;
  text-transform: uppercase;
  border-radius: 10px;
  background: linear-gradient(135deg, #3a8ffe 0%, #9658fe 100%);
  cursor: pointer;
  transition: transform 0.45s ease, background 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  &:disabled {
    background: gray;
    cursor: not-allowed;
    transform: none;
  }
`;
