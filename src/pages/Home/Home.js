import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import axios from "axios";

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
  const [attend, setAttend] = useState([]);

  useEffect(() => {
    const socket = io("ws://localhost:5000");

    socket.on("connection", () => {
      console.log(`connected to server`);
    });

    socket.on("create-attendc", (newAttend) => {
      setAttend(newAttend);
    });

    socket.on("delete-attendc", (newAttend) => {
      setAttend(newAttend);
    });

    socket.on("message", (message) => {
      console.log(message);
    });

    socket.on("disconnect", () => {
      console.log("Socket disconnecting");
    });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/attende")
      .then((response) => {
        setAttend(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Wrapper>
      {attend.map((item, i) => {
        return <Card key={i} items={item} id={i} />;
      })}
    </Wrapper>
  );
};

export default Home;
