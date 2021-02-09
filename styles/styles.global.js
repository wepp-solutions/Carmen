import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        height: 100vh;
        width: 100%;
        background: #fff;
        color: #222;
        justify-content: center;
        font-family: 'Poppins', sans-serif;
    }
`
