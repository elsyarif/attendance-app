import React from "react";
import { Card } from "../../components";
import { Wrapper } from "./homeSyles";

const data = [
  // {
  //   img: "/static/foto.jpeg",
  //   nik: 113581,
  //   nama: "Syarif Hidayatulloh",
  //   status: "masuk",
  //   jmMasuk: "12-03-2021 08:00",
  //   statusPulang: "pulang",
  //   jmPulang: "12-03-2021 15:00",
  // },
  {
    img: "/static/img1.jpg",
    nik: "sub heading",
    nama: "Heading ",
    status: "include",
    jmMasuk: "point 1",
    statusPulang: "include o",
    jmPulang: "point 2",
  },
  {
    img: "/static/img1.jpg",
    nik: "sub heading",
    nama: "Heading ",
    status: "include",
    jmMasuk: "point 1",
    statusPulang: "include o",
    jmPulang: "point 2",
  },
  {
    img: "/static/img1.jpg",
    nik: "sub heading",
    nama: "Heading ",
    status: "include",
    jmMasuk: "point 1",
    statusPulang: "include o",
    jmPulang: "point 2",
  },
  {
    img: "/static/img1.jpg",
    nik: "sub heading",
    nama: "Heading ",
    status: "include",
    jmMasuk: "point 1",
    statusPulang: "include o",
    jmPulang: "point 2",
  },
  {
    img: "/static/img1.jpg",
    nik: "sub heading",
    nama: "Heading ",
    status: "include",
    jmMasuk: "point 1",
    statusPulang: "include o",
    jmPulang: "point 2",
  },
  {
    img: "/static/img1.jpg",
    nik: "sub heading",
    nama: "Heading ",
    status: "include",
    jmMasuk: "point 1",
    statusPulang: "include o",
    jmPulang: "point 2",
  },
  {
    img: "/static/img1.jpg",
    nik: "sub heading",
    nama: "Heading ",
    status: "include",
    jmMasuk: "point 1",
    statusPulang: "include o",
    jmPulang: "point 2",
  },
  {
    img: "/static/img1.jpg",
    nik: "sub heading",
    nama: "Heading ",
    status: "include",
    jmMasuk: "point 1",
    statusPulang: "include o",
    jmPulang: "point 2",
  },
  {
    img: "/static/img1.jpg",
    nik: "sub heading",
    nama: "Heading ",
    status: "include",
    jmMasuk: "point 1",
    statusPulang: "include o",
    jmPulang: "point 2",
  },
  {
    img: "/static/img1.jpg",
    nik: "sub heading",
    nama: "Heading ",
    status: "include",
    jmMasuk: "point 1",
    statusPulang: "include o",
    jmPulang: "point 2",
  },
  {
    img: "/static/img1.jpg",
    nik: "sub heading",
    nama: "Heading ",
    status: "include",
    jmMasuk: "point 1",
    statusPulang: "include o",
    jmPulang: "point 2",
  },
  {
    img: "/static/img1.jpg",
    nik: "sub heading",
    nama: "Heading ",
    status: "include",
    jmMasuk: "point 1",
    statusPulang: "include o",
    jmPulang: "point 2",
  },
  {
    img: "/static/img1.jpg",
    nik: "sub heading",
    nama: "Heading ",
    status: "include",
    jmMasuk: "point 1",
    statusPulang: "include o",
    jmPulang: "point 2",
  },
  {
    img: "/static/img1.jpg",
    nik: "sub heading",
    nama: "Heading ",
    status: "include",
    jmMasuk: "point 1",
    statusPulang: "include o",
    jmPulang: "point 2",
  },
  {
    img: "/static/img1.jpg",
    nik: "sub heading",
    nama: "Heading ",
    status: "include",
    jmMasuk: "point 1",
    statusPulang: "include o",
    jmPulang: "point 2",
  },
  {
    img: "/static/img1.jpg",
    nik: "sub heading",
    nama: "Heading ",
    status: "include",
    jmMasuk: "point 1",
    statusPulang: "include o",
    jmPulang: "point 2",
  },
  {
    img: "/static/img1.jpg",
    nik: "sub heading",
    nama: "Heading ",
    status: "include",
    jmMasuk: "point 1",
    statusPulang: "include o",
    jmPulang: "point 2",
  },
];

const Home = () => {
  return (
    <Wrapper>
      {data.map((item, i) => {
        return <Card key={i} items={item} id={i} />;
      })}
    </Wrapper>
  );
};

export default Home;
