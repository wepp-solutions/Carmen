import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px 0;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    width: min(600px, 90%);
    flex-direction: column;
    margin: 30px 0;

    label {
        font-size: 18px;
        font-weight: 800;
        margin-top: 20px;
    }
    
    input {
        padding: 10px;
        font-size: 17px;
    }

    button {
        padding: 10px;
        background: #333;
        color: #fff;
        border: none;
        outline: none;
        margin-top: 10px;
        font-size: 18px;
        font-weight: 700;
    }
  }
`;
export const ImageBox = styled.div`
    position: relative;
    width: 150px;
    height: 150px;
    box-shadow: 0px 10px 20px rgb(0, 0, 0, 0.2);
    border-radius: 100px;
    margin-bottom: 20px;

    .img {
        border-radius: 100px;
    }
`
export const Texts = styled.div`
    text-align: center;
    max-width: 600px;

    p {
        font-size: 18px;
        font-style: italic;
    }
`