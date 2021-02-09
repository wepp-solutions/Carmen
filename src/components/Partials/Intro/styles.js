import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const Texts = styled.div`
  margin-top: 100px;
  color: #444;
  text-align: center;

  h1 {
    font-size: clamp(1.5rem, 5vw, 2.5rem);
  }
  p {
    max-width: 900px;
    font-size: clamp(1rem, 5vw, 1.4rem);
  }
  button {
    background: #333;
    color: #fff;
    padding: 10px;
    border: none;
    outline: none;
    margin-top: 30px;
    font-size: clamp(1rem, 5vw, 1.2rem);
    transition: 0.5s ease-in-out;

    :hover {
      cursor: pointer;
      letter-spacing: 2px;
      transition: 0.5s ease-in-out;
    }
  }
`;
export const ImagesWrapper = styled.div`
    display: flex;
    width: 100%;
    margin-top: 70px;

    @media (max-width: 600px) {
      flex-direction: column;
    }
`
export const ImageBox = styled.div`
    position: relative;
    width: 100%;
    height: 500px;
`