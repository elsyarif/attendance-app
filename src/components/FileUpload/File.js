import React from "react";
import {
  Content,
  Filename,
  Icon,
  ImagePreview,
  Text,
  UploadBtn,
  Wrapper,
} from "./fileStyles";

import { FaCloudUploadAlt } from "react-icons/fa";

const File = () => {
  return (
    <Wrapper>
      <ImagePreview>
        <img src="" alt="" />
      </ImagePreview>
      <Content>
        <Icon>
          <FaCloudUploadAlt />
        </Icon>
        <Text>No Photo Taken!</Text>
        <Filename>file name</Filename>
      </Content>
      <UploadBtn>Take Photo</UploadBtn>
      <input type="file" accept="image/*" capture="user" />
    </Wrapper>
  );
};

export default File;
