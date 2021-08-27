import React, { useState } from "react";
import {
  BtnCancel,
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

import { FaCloudUploadAlt, FaCamera, FaTrash } from "react-icons/fa";
import { Container } from "./fileStyles";

const File = () => {
  const [image, setImage] = useState(false);
  const [file, setFile] = useState("");
  const [fileSize, setFileSize] = useState("");
  const [fileName, setFileName] = useState("");

  const takePhoto = () => {
    const test = document.getElementById("uploadFile");
    // debugger;
    test.click();
  };

  const handleChange = (e) => {
    let reader = new FileReader();

    reader.onload = function (e) {
      setFile(e.target.result);
      setImage(true);
    };
    debugger;

    let file_Size = e.target.files[0].size;
    if (file_Size > 1024 * 1024) {
      file_Size =
        (Math.round((file_Size * 100) / (1024 * 1024)) / 100).toString() + "MB";
    } else {
      file_Size =
        (Math.round((file_Size * 100) / 1024) / 100).toString() + "KB";
    }
    setFileSize(file_Size);

    setFileName(e.target.files[0].name);
    reader.readAsDataURL(e.target.files[0]);
  };

  const removeImage = (e) => {
    debugger;
    setImage(false);
    setFile("");
    setFileSize(null);
    setFileName(null);
  };

  return (
    <Container>
      <Wrapper>
        <ImagePreview>{image && <img src={file} alt="" />}</ImagePreview>
        <Content onClick={takePhoto}>
          {!image && (
            <>
              <Icon>
                <FaCloudUploadAlt />
              </Icon>
              <Text>No Photo Taken!</Text>
            </>
          )}
        </Content>
        {image && (
          <BtnCancel image={!image}>
            <FaTrash onClick={removeImage} />
          </BtnCancel>
        )}
        <Filename image={image}>
          <span>{fileName}</span>
          <span>{fileSize}</span>
        </Filename>
      </Wrapper>
      {!image && (
        <BtnWrapper>
          <UploadBtn onClick={takePhoto} onChange={handleChange}>
            <FaCamera />
          </UploadBtn>
        </BtnWrapper>
      )}

      <input
        hidden
        type="file"
        id="uploadFile"
        accept="image/*"
        capture="user"
        onChange={handleChange}
      />
      <BtnWrapper>
        <ButtonSave>SAVE</ButtonSave>
      </BtnWrapper>
    </Container>
  );
};

export default File;
