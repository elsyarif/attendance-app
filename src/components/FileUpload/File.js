import React from "react";
import {
  BtnWrapper,
  ButtonSave,
  Content,
  Filename,
  Icon,
  ImagePreview,
  Text,
  UploadBtn,
  Wrapper,
} from "./fileStyles";

import { FaCloudUploadAlt, FaCamera } from "react-icons/fa";

const File = () => {
  const takePhoto = () => {
    const test = document.getElementById("uploadFile");
    // debugger;
    test.click();
  };

  return (
    <>
      <Wrapper>
        <ImagePreview>{/* <img src="/" alt="" /> */}</ImagePreview>
        <Content>
          <Icon>
            <FaCloudUploadAlt />
          </Icon>
          <Text>No Photo Taken!</Text>
          <Filename>file name</Filename>
        </Content>
      </Wrapper>
      <BtnWrapper>
        <UploadBtn onClick={takePhoto}>
          <FaCamera />
        </UploadBtn>
      </BtnWrapper>
      <input
        hidden
        type="file"
        id="uploadFile"
        accept="image/*"
        capture="user"
      />
      <BtnWrapper>
        <ButtonSave disabled>SAVE</ButtonSave>
      </BtnWrapper>
    </>
  );
};

export default File;
