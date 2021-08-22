import React from "react";
import { File, Input, Select, Topnav } from "../../components";

import { Wrapper } from "./attendStyles";

const Attend = () => {
  return (
    <div>
      <Topnav />
      <Wrapper>
        <Input type="number" id="nik" name="nik" label="NIK" />
        <Input type="text" id="nik" name="status" label="Status" />
        <Select />
        <File />
      </Wrapper>
    </div>
  );
};

export default Attend;
