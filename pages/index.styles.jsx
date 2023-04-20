import styled from "styled-components";

export const Main = styled.main`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 1rem;
width: 100%;
height: 100%;
background-color: black;
`

export const Section = styled.section `
display: flex;
flex-direction: column;
background-color: black;
color: white;
width: 51.6rem;
height: 30%;
border-radius: 20px;
border: red 2px solid;

    .container{
      display: flex;
      flex-direction: row;
    }

    .poster{
        height: 20rem; 
        width: 13rem;
        margin: 25px;
        border-radius: 20px;
    }

    .information{
        display: flex;
        flex-direction: column;
        width: 34rem;
    }

    .titulo{
        display: flex;
        margin-bottom: 8px;
    }

    .IMDB{
        height: 40px;
        width: 40px;
    }

    .imgIMDB{
        position: absolute;
    }

    .notaIMDB{
        display: flex;
        position: relative;
        color: black;
        margin-top: 20px;
        margin-left: 6.5px;
        height: 60px;
        width: 50px;
        font-family: 'Roboto', sans-serif;
    }

    .boxOfficeContainer,
    .releaseDateOf,
    .durationContainer{
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 8px;
        height: 3rem;
        background-color: #111111;
    }

    .subTitleBoxOffice,
    .subTitleDate,
    .subTitleDuration{
        display: flex;
        flex-direction: row;
        gap: 8px;
        color: #f5c518;
        margin: 5px 5px 2px 5px;
    }

    .date,
    .boxOffice,
    .duration{
        font-family: 'Roboto', sans-serif;
        font-size: 0.8em;
        margin: 0px 5px 5px 5px;
    }

    .subTitle{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 28px;
        margin-bottom: 15px;
    }

    .generoContainer{
        display: flex;
        align-items: center;
        margin-bottom: 15px;
    }

    .genero{
        display: flex;
        font-family: 'Roboto', sans-serif;
        font-size: 0.8em;
        background-color: #111111;
        padding: 5px;
        border-radius: 8px;
        color: white;
    }

    .sinopseContainer{
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        background-color: #111111;
        border-radius: 8px;
    }

    .subTitleSinopse{
        display: flex;
        flex-direction: row;
        gap: 8px;
        color: #f5c518;
        margin: 5px 0px 5px 10px;
    }

    .sinopse{
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        margin-left: 10px;
        font-size: 0.9rem;
        font-family: 'Roboto', sans-serif;
    }

    .links{
        display: flex;
        
        gap: 60px;
    }

    .watch{
        display: flex;
        align-items: center;
        gap: 8px;
        background-color: #111111;
        border-radius: 8px;
        padding: 3px 10px 3px 10px;
        color: #f5c518;
        font-family: 'Roboto', sans-serif;
        font-size: 0.8em;
    }

    .imgYoutube{
        width: 45px;
        height: 32px;
    }

    .imgDisney{
        width: 50px;
        height: 35px;
        border-radius: 10px;
    }

    .imgAmazon{
        width: 38px;
        height: 37px;
        border-radius: 10px;
    }
`

