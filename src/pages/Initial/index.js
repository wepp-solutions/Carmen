import React from 'react'
import {
  Container,
  Header,
  Texts,
} from "../../../styles/Home/styles";
import About from "../../components/Partials/About";
import Intro from "../../components/Partials/Intro";

export default function Initial() {
  return (
    <>
      <Container>
        <Header>
          <Texts>
            <p>O Poder da arte</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              enim deleniti, molestiae dolore nulla sapiente.
            </p>
          </Texts>
        </Header>
      </Container>
      <Intro />
      <About />
    </>
  );
}
