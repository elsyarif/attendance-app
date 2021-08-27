import React from "react";
import { File, Input, Select } from "../../components";
import { Container, Header, HeaderWrapper, SubHeader } from "./attendStyles";

import { Wrapper } from "./attendStyles";

const Attend = () => {
  return (
    <Container>
      <HeaderWrapper>
        <Header>Attendance Application</Header>
        <SubHeader>TEAM</SubHeader>
      </HeaderWrapper>
      <Wrapper>
        <Input type="number" id="nik" name="nik" label="NIK" />
        <Select />
        <File />
      </Wrapper>
    </Container>
  );
};

export default Attend;
