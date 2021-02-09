import React from "react";
import Image from "next/image";
import { Container, Texts, ImageBox, ImagesWrapper } from "./styles";

const Intro = () => {
  return (
    <Container>
      <Texts>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum,
          provident voluptatem? Dicta ab similique asperiores, voluptate
          consequuntur pariatur corrupti vero.
        </p>
        <button>Conhecer minha Arte</button>
      </Texts>

      <ImagesWrapper>
        <ImageBox>
          <Image
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            src="https://images.pexels.com/photos/2608040/pexels-photo-2608040.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          />
        </ImageBox>
        <ImageBox>
          <Image
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            src="https://images.pexels.com/photos/2927596/pexels-photo-2927596.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
        </ImageBox>
        <ImageBox>
          <Image
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            src="https://images.pexels.com/photos/2236382/pexels-photo-2236382.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
        </ImageBox>
        <ImageBox>
          <Image
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            src="https://images.pexels.com/photos/2265922/pexels-photo-2265922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          />
        </ImageBox>
      </ImagesWrapper>
    </Container>
  );
};

export default Intro;
