import React from "react";
import Image from "next/image";
import { Container, ImageBox, Texts } from "./styles";

const About = () => {
  return (
    <Container>
      <ImageBox>
        <Image
          src="https://images.pexels.com/photos/2801603/pexels-photo-2801603.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="img"
        />
      </ImageBox>

      <Texts>
        <h1>Carlo Lavelance</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum,
          laboriosam animi odio eaque dolorum sint soluta excepturi voluptatum
          similique? Necessitatibus.
        </p>
      </Texts>

      <form >
        <label htmlFor="">Digite seu nome</label>
        <input type="text" placeholder="Nome"/>
        <label htmlFor="">Digite seu E-mail</label>
        <input type="text" placeholder="E-Mail"/>
        <button>Enviar</button>
      </form>
    </Container>
  );
};

export default About;
