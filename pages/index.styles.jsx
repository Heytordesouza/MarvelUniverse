import styled from "styled-components";

export const Main = styled.main`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 1rem;
`

export const Section = styled.section `
display: flex;
flex-direction: column;
background-color: black;
color: white;
width: 52rem;
height: 23rem;
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
        margin-bottom: 20px;
    }

    .generoContainer{
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        border: 1px solid white; 
        border-radius: 8px;
        width: 13rem;
    }

    .subTitleGenero{
        color: #f5c518;
        margin: 5px 5px 2px 5px;
    }

    .genero{
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        font-family: 'Roboto', sans-serif;
        font-size: 0.8em;
        margin-bottom: 5px;
        color: #f5c518;

    }

    .sinopseContainer{
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        background-color: #111111;
        border-radius: 8px;
    }

    .sinopse{
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
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
        width: 42px;
        height: 37px;
        border-radius: 10px;
    }
`

