import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-image: url("https://images.pexels.com/photos/1154198/pexels-photo-1154198.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260");
  background-size: cover;
  background-attachment: fixed;
`;

export const Header = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0, 0.4);
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;

  p:nth-child(1) {
    color: #fff;
    font-weight: 900;
    text-transform: uppercase;
    font-size: clamp(1.5rem, 5vw, 4rem);
  }
  p:nth-child(2) {
    color: #fff;
    font-weight: 300;
    font-size: clamp(1rem, 5vw, 1.8rem);
    max-width: 800px;
  }
`;
