import React from "react";
import { Link } from "react-router-dom";
import {
  CardContent,
  CardHeader,
  CardImage,
  CardSub,
  Wrapper,
  CardFooter,
  CardTime,
  CardStatus,
  CardBody,
} from "./cardStyles";

const Card = ({ items }) => {
  return (
    <>
      <Wrapper>
        <CardImage>
          <Link to="/detail">
            <img src={items.image} alt={items.image} />
          </Link>
        </CardImage>
        <CardContent>
          <CardHeader>{items.name}</CardHeader>
          <CardSub>{items.nip}</CardSub>
          <CardBody>
            <CardFooter>
              <CardTime>{items.waktu}</CardTime>
              <CardStatus>{items.status}</CardStatus>
            </CardFooter>
            <CardFooter>
              <CardTime>{items.jmPulang}</CardTime>
              <CardStatus>{items.statusPulang}</CardStatus>
            </CardFooter>
          </CardBody>
        </CardContent>
      </Wrapper>
    </>
  );
};

export default Card;
