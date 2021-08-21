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
            <img src={items.img} alt={items.img} />
          </Link>
        </CardImage>
        <CardContent>
          <CardHeader>{items.nama}</CardHeader>
          <CardSub>{items.nik}</CardSub>
          <CardBody>
            <CardFooter>
              <CardTime>{items.jmMasuk}</CardTime>
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
