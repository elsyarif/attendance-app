import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 15px 16px;
  background-color: white;
  border-radius: 10px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  transition: transform 0.45s ease, background 0.45s ease;
  &:hover {
    box-shadow: 0 1.5em 2.5em -0.5em rgba(#000000, 0.1);
    transform: scale(1.05);
  }
`;

export const CardImage = styled.div`
  position: sticky;
  justify-content: flex-start;
  width: 35%;
  height: calc(100px + 8vw);
  bottom: 0;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  overflow: hidden;
  transition: transform 0.45s ease, background 0.45s ease;

  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
    width: 80vw;
    height: 80vw;
    object-fit: cover;
    object-position: 50% 50%;
    transition: transform 0.45s ease, background 0.45s ease;
  }

  &:hover {
    display: block;
    max-width: 100%;
    max-height: 100%;
  }
`;
export const CardContent = styled.div`
  width: 60%;
  margin: 8px 6px;
`;

export const CardHeader = styled.div`
  font-size: 15px;
  word-wrap: break-word;
  font-weight: 500;
  line-height: 1.4em;
  margin-bottom: 0.4em;
`;

export const CardSub = styled.span`
  font-weight: 400;
  font-size: small;
  color: #5e5e5e;
  margin-top: 0.2em;
`;

export const CardBody = styled.div`
  position: block;
  bottom: 0;
  margin-top: 0.2em;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardTime = styled(CardSub)``;

export const CardStatus = styled(CardSub)``;
