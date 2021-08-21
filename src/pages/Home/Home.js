import React from "react";
import { Card } from "../../components";
import { Wrapper } from "./homeSyles";

const data = [
  {
    img: "/static/foto.jpeg",
    nik: 113581,
    nama: "Syarif Hidayatulloh",
    status: "masuk",
    jmMasuk: "12-03-2021 08:00",
    statusPulang: "pulang",
    jmPulang: "12-03-2021 15:00",
  },
  {
    img: "/static/img1.jpg",
    nik: 112143,
    nama: "Susmita Puspitasari",
    status: "masuk",
    jmMasuk: "12-03-2021 08:00",
  },
  {
    img: "/static/foto.jpeg",
    nik: 112143,
    nama: "Muchammad Angga Anggriawan",
    status: "masuk",
    jmMasuk: "12-03-2021 08:00",
  },
  {
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.remove.bg%2F&psig=AOvVaw2pI1c66GV2Fg6CyFHzqBLd&ust=1629631911610000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPCS-4uCwvICFQAAAAAdAAAAABAD",
    nik: 112143,
    nama: "Test1",
    status: "masuk",
    jmMasuk: "12-03-2021 08:00",
  },
  {
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.remove.bg%2F&psig=AOvVaw2pI1c66GV2Fg6CyFHzqBLd&ust=1629631911610000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPCS-4uCwvICFQAAAAAdAAAAABAD",
    nik: 112143,
    nama: "Test1",
    status: "masuk",
    jmMasuk: "12-03-2021 08:00",
  },
  {
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.remove.bg%2F&psig=AOvVaw2pI1c66GV2Fg6CyFHzqBLd&ust=1629631911610000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPCS-4uCwvICFQAAAAAdAAAAABAD",
    nik: 112143,
    nama: "Test1",
    status: "masuk",
    jmMasuk: "12-03-2021 08:00",
  },
  {
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.remove.bg%2F&psig=AOvVaw2pI1c66GV2Fg6CyFHzqBLd&ust=1629631911610000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPCS-4uCwvICFQAAAAAdAAAAABAD",
    nik: 112143,
    nama: "Test1",
    status: "masuk",
    jmMasuk: "12-03-2021 08:00",
  },
  {
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.remove.bg%2F&psig=AOvVaw2pI1c66GV2Fg6CyFHzqBLd&ust=1629631911610000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPCS-4uCwvICFQAAAAAdAAAAABAD",
    nik: 112143,
    nama: "Test1",
    status: "masuk",
    jmMasuk: "12-03-2021 08:00",
  },
  {
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.remove.bg%2F&psig=AOvVaw2pI1c66GV2Fg6CyFHzqBLd&ust=1629631911610000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPCS-4uCwvICFQAAAAAdAAAAABAD",
    nik: 112143,
    nama: "Test1",
    status: "masuk",
    jmMasuk: "12-03-2021 08:00",
  },
  {
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.remove.bg%2F&psig=AOvVaw2pI1c66GV2Fg6CyFHzqBLd&ust=1629631911610000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPCS-4uCwvICFQAAAAAdAAAAABAD",
    nik: 112143,
    nama: "Test1",
    status: "masuk",
    jmMasuk: "12-03-2021 08:00",
  },
  {
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.remove.bg%2F&psig=AOvVaw2pI1c66GV2Fg6CyFHzqBLd&ust=1629631911610000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPCS-4uCwvICFQAAAAAdAAAAABAD",
    nik: 112143,
    nama: "Test1",
    status: "masuk",
    jmMasuk: "12-03-2021 08:00",
  },
  {
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.remove.bg%2F&psig=AOvVaw2pI1c66GV2Fg6CyFHzqBLd&ust=1629631911610000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPCS-4uCwvICFQAAAAAdAAAAABAD",
    nik: 112143,
    nama: "Test1",
    status: "masuk",
    jmMasuk: "12-03-2021 08:00",
  },
  {
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.remove.bg%2F&psig=AOvVaw2pI1c66GV2Fg6CyFHzqBLd&ust=1629631911610000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPCS-4uCwvICFQAAAAAdAAAAABAD",
    nik: 112143,
    nama: "Test1",
    status: "masuk",
    jmMasuk: "12-03-2021 08:00",
  },
  {
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.remove.bg%2F&psig=AOvVaw2pI1c66GV2Fg6CyFHzqBLd&ust=1629631911610000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPCS-4uCwvICFQAAAAAdAAAAABAD",
    nik: 112143,
    nama: "Test1",
    status: "masuk",
    jmMasuk: "12-03-2021 08:00",
  },
  {
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.remove.bg%2F&psig=AOvVaw2pI1c66GV2Fg6CyFHzqBLd&ust=1629631911610000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPCS-4uCwvICFQAAAAAdAAAAABAD",
    nik: 112143,
    nama: "Test1",
    status: "masuk",
    jmMasuk: "12-03-2021 08:00",
  },
  {
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.remove.bg%2F&psig=AOvVaw2pI1c66GV2Fg6CyFHzqBLd&ust=1629631911610000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPCS-4uCwvICFQAAAAAdAAAAABAD",
    nik: 112143,
    nama: "Test1",
    status: "masuk",
    jmMasuk: "12-03-2021 08:00",
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
