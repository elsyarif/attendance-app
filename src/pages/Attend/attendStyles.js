import styled from "styled-components";

export const Wrapper = styled.div`
  /* margin-top: 18%; */
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 20px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  background: #fff;
  box-shadow: 0.05em 0.1em 0.3em -0.03em rgba(0, 0, 0, 0.45);
  padding: 8px;
  border-radius: 13px;
`;

export const Container = styled.div`
  position: relative;
  height: calc(100vh - 55px);
  overflow: scroll;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.h2`
  font-size: 1.35em;
  margin: 0.3em 0.3em 0.1em 0.6em;
`;

export const SubHeader = styled.h4`
  font-size: 1.05em;
  margin: 0.1em 0.6em;
`;
