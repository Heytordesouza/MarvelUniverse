import styled from "styled-components";

export const Main = styled.main`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 30px;
`

export const Section = styled.section `
display: flex;
flex-direction: column;
background-color: black;
color: white;
width: 800px;
height: 360px;
border-radius: 20px;

    .container{
      display: flex;
      flex-direction: row;
    }

    .poster{
        height: 310px; 
        width: 310px;
        margin: 25px;
        border-radius: 20px;
    }

    .information{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .subTitle{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 80px;
        margin-bottom: 20px;
    }

    .links{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 80px;
    }
`

