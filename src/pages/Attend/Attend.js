import React from "react";
import { Input, Topnav } from "../../components";

import { Wrapper } from "./attendStyles";

const Attend = () => {
  return (
    <div>
      <Topnav />
      <Wrapper>
        <Input type="number" placeholder="NIK" />
      </Wrapper>
    </div>
  );
};

export default Attend;
