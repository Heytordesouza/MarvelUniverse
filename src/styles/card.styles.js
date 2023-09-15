import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100vw;
    gap: 1rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    background-color: black;
    color: white;
    width: 80vw;
    border-radius: 20px;
    border: red 2px solid;
    margin: 1%;

    .container{
        display: flex;
        flex-direction: row;
        width: 100%;
    }

    .poster{
        height: 50%; 
        width: 20%;
        margin: 25px;
        border-radius: 10px;
        cursor: pointer;
    }

    .information{
        display: flex;
        flex-direction: column;
        width: 75%;
        height: 40%;
        margin-bottom: 10px;
    }

    .titulo{
        display: flex;
        margin-bottom: 10px;
        margin-top: 10px;
        align-items: center;
        max-width: inherit;
        height: 100%;
        font-size: 2.5vw;
        font-weight: bold;
    }

    .generoContainer{
        display: flex;
        align-items: center;
        margin-bottom: 1%;
        gap: 1.7%;
    }

    .type{
        display: flex;
        font-family: 'Roboto', sans-serif;
        font-size: 1vw;
        background-color: #111111;
        padding: 5px;
        border-radius: 8px;
        justify-content: center;
        width: 5.2%;
        color: white;
    }

    .genero{
        display: flex;
        font-family: 'Roboto', sans-serif;
        font-size: 1vw;
        background-color: #111111;
        padding: 5px;
        border-radius: 8px;
        color: white;
    }

    .subTitleContainer{
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        gap: 3%;
        margin-bottom: 1%;
        width: 90%;
        height: 20%;
    }

    .IMDB{
        display: flex;
        height: 45%;
        width: 4.8%;
        align-items: center;
        justify-content: center;
    }

    .imgIMDB{
        display: flex;
        position: absolute;
        width: 2.9%;
        margin-left: 0.5%;
    }

    .notaIMDB{
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        color: black;
        margin-top: 1.7em;
        height: 1.8em;
        width: 2em;
        margin-left: 19%;
        font-family: 'Roboto', sans-serif;
        font-size: 1.1vw;
        font-weight: bold;
    }

    .releaseDateOf,
    .durationContainer,
    .boxOfficeContainer{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        height: 90%;
        width: 28%;
        background-color: #111111;
    }

    .subTitle{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 8px;
        color: #f5c518;
        margin: 5px 5px 2px 5px;
        font-size: 1vw;
        width: 90%;
    }

    .imgSubtitle{
        height: 90%;
        width: 12%;
    }

    .date,
    .duration,
    .boxOffice{
        font-family: 'Roboto', sans-serif;
        font-size: 1vw;
        margin: 0px 5px 5px 5px;
    }

    .sinopseContainer{
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        background-color: #111111;
        border-radius: 8px;
        width: 95%;
    }

    .subTitleSinopse{
        display: flex;
        flex-direction: row;
        gap: 8px;
        color: #f5c518;
        margin: 5px 0px 5px 10px;
        font-size: 1vw;
    }

    .sinopse{
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        margin-left: 10px;
        font-size: 1vw;
        font-family: 'Roboto', sans-serif;
    }

    .links{
        display: flex;
        gap: 4%;
    }

    .watch{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 8%;
        padding-top: 0.5px;
        width: 30%;
        background-color: #111111;
        border: 1px solid black;
        border-radius: 8px;
        color: #f5c518;
        font-family: 'Roboto', sans-serif;
        font-size: 1vw;

        :hover{
            background-color: black;
            border: 1px solid red;
        }

        :active{
            background-color: black;
            border: 1px solid white;
        }
    }

    .imgWatch{
        display: flex;
        flex-direction: row;
        gap: 8%;
        width: 100%;
        justify-content: center;
        align-items: center;
    }

    .imgYoutube{
        width: 3em;
        height: 2em;
    }

    .imgDisney{
        width: 4.1em;
        height: 2.7em;
        border-radius: 10px;
        padding: 1%;
    }

    .imgAmazon{
        width: 2.5em;
        height: 2.5em;
        border-radius: 10px;
        padding: 0.5%;
    }

    .imgNetflix{
        width: 3em;
        height: 2.5em;
        border-radius: 10px;
        padding: 1%;
    }

    .imgHBO{
        width: 2.5em;
        height: 2.5em;
        border-radius: 10px;
        padding: 1%;
    }

    @media screen and (min-device-width: 900px) and (max-device-width: 1200px) {
        width: 800px;
        height: 80%;

        .container{
            height: 100%;
        }

        .poster{
            height: 400px;
            width: 17em; 
            margin: 25px 0px 25px 30px;
            border-radius: 20px;
        }

        .information{
            width: 63%;
            align-items: center;
            justify-content: center;
        }

        .titulo{
            justify-content: center;
            width: 370px;
            height: 5rem;
            font-size: 28px;
            text-align: center;
        }

        .generoContainer{
            margin-bottom: 15px;
            gap: 6%;
            width: 310px;
            justify-content: center;
        }

        .type{
            font-size: 0.8em;
            padding: 5px 22px;
        }

        .genero{
            font-size: 0.8em;
        }

        .subTitleContainer{
            flex-direction: column;
            gap: 10%;
            margin-bottom: 10px;
            width: 80%;
        }

        .IMDB{
            margin-bottom: 2%;
        }

        .imgIMDB{
            width: 3%;
            align-items: center;
            justify-content: center;
        }

        .notaIMDB{
            margin-top: 1.4em;
            margin-left: 0.4em;
            width: 1.2em;
            font-size: 1.4vw;
        }

        .releaseDateOf,
        .durationContainer,
        .boxOfficeContainer{
            height: 100%;
            width: 80%;
            margin-bottom: 20px;
        }

        .notBoxOfficeContainer{
            background-color: black;
            padding: 10% 40%;
        }

        .subTitle{
            font-size: 100%;
        }

        .imgSubtitle{
            height: 80%;
            width: 10%;
        }

        .date,
        .duration,
        .boxOffice{
            font-size: 100%;
        }

        .sinopseContainer{
            position: relative;
            margin: -5px 210px 15px -90px;
            width: 740px;
            padding: 2px;
        }

        .sinopse{
            font-size: 0.9rem;
        }

        .links{
            position: relative;
            margin-left: -300px;
            gap: 60px;
            width: 500px;
            justify-content: center;
            align-items: center;
        }

        .watch{
            width: 50%;
            height: 10%;
            padding: 3px 1px 3px 3px;
            font-size: 0.8em;  
        }

        .imgWatch{
            gap: 6%;
            text-align: center;
        }

        .imgYoutube{
            width: 42px;
            height: 30px;
        }

        .imgDisney{
            width: 58px;
            height: 35px;
            border-radius: 10px;
        }

        .imgAmazon{
            width: 38px;
            height: 37px;
            border-radius: 10px;
        }

        .imgNetflix{
            width: 40px;
            height: 35px;
            border-radius: 7px;
        }

        .imgHBO{
            width: 38px;
            height: 35px;
            border-radius: 7px;
        }
    }

    @media screen and (min-device-width: 680px) and (max-device-width: 899px) {
        width: 630px;
        height: 80%;
        margin: 2%;

        .container{
            height: 100%;
        }

        .poster{
            height: 22rem; 
            width: 15rem;
            margin: 25px 0px 25px 25px;
            border-radius: 20px;
        }

        .information{
            width: 57%;
            align-items: center;
            justify-content: center;
        }

        .titulo{
            padding-top: 20px;
            justify-content: center;
            text-align: center;
            width: 320px;
            height: 3rem;
            font-size: 24px;
        }

        .generoContainer{
            margin-bottom: 15px;
            gap: 6%;
            width: 310px;
            margin-top: 20px;
            justify-content: center;
        }

        .type{
            font-size: 0.8em;
            padding: 5px 22px;
        }

        .genero{
            font-size: 0.8em;
        }

        .subTitleContainer{
            flex-direction: column;
            gap: 10%;
            margin-bottom: 10px;
            width: 80%;
        }

        .IMDB{
            width: 4.8%;
            margin-bottom: 2%;
        }

        .imgIMDB{
            width: 3.3%;
            align-items: center;
            justify-content: center;
        }

        .notaIMDB{
            margin-top: 1.5em;
            margin-left: 0.3em;
            width: 1.2em;
            font-size: 1.4vw;
        }

        .releaseDateOf,
        .durationContainer,
        .boxOfficeContainer{
            height: 100%;
            width: 80%;
            margin-bottom: 10px;
        }

        .notBoxOfficeContainer{
            background-color: black;
            padding: 12% 40%;
        }

        .subTitle{
            font-size: 100%;
        }

        .date,
        .duration,
        .boxOffice{
            font-size: 100%;
        }

        .sinopseContainer{
            position: relative;
            margin: 0px 110px 15px -155px;
            width: 570px;
        }

        .subTitleSinopse{
            font-size: 100%;
        }

        .sinopse{
            font-size: 0.9rem;
        }

        .links{
            position: relative;
            margin-left: -265px;
            width: 30em;
            justify-content: center;
            align-items: center;
        }

        .watch{
            width: 60%;
            height: 10%;
            border-radius: 8px;
            padding: 3px 12px 3px 10px;
            font-size: 1em;  
        }

        .imgWatch{
            gap: 10%;
        }

        .imgYoutube{
            width: 45px;
            height: 32px;
        }

        .imgDisney{
            width: 52px;
            height: 32px;
            border-radius: 10px;
        }

        .imgAmazon{
            width: 38px;
            height: 37px;
            border-radius: 10px;
        }

        .imgNetflix{
            width: 40px;
            height: 35px;
            border-radius: 7px;
        }

        .imgHBO{
            width: 38px;
            height: 35px;
            border-radius: 7px;
        }
    }

    @media screen and (max-device-width: 679px) {
        width: 85vw;
        height: 30%;
        margin: 2%;

        .container{
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .poster{
            height: 60%; 
            width: 70%;
            margin: 25px 25px 20px 25px;
            border-radius: 20px;
        }

        .information{
            width: 100%;
            align-items: center;
            justify-content: center;
        }

        .titulo{
            margin-bottom: 20px;
            justify-content: center;
            text-align: center;
            width: 85%;
            height: 100%;
            font-size: 6vw;
        }

        .generoContainer{
            justify-content: center;
            width: 90vw;
            gap: 4%;
        }

        .type{
            font-size: 3.3vw;
            padding: 5px 28px;
        }

        .genero{
            font-size: 3.3vw;
        }

        .subTitleContainer{
            justify-content: center;
            margin-bottom: 15px;
            width: 100%;
        }

        .IMDB{
            margin-top: 3.5%;
            margin-left: 4%;
            margin-right: 2%;
        }

        .imgIMDB{
            width: 9%;
            height: 5.6%;
            align-items: center;
            justify-content: center;
        }

        .notaIMDB{
            margin-top: 1.3em;
            margin-left: 0.1em;
            height: 1.2em;
            width: 1.5em;
            font-size: 3.9vw;
        }

        .releaseDateOf{
            height: 100%;
            width: 75%;
            margin: 15px 5px 2px 5px;
        }

        .durationContainer {
            width: 40%;
            height: 100%;
            margin-top: 3%;
        }

        .boxOfficeContainer {
            width: 47%;
            height: 100%;
            margin-top: 3%;
        }

        .subTitle{
            width: 80%;
            height: 100%;
            font-size: 3.5vw;
            margin: 5px;
        }

        .imgSubtitle{
            height: 1.2em;
            width: 1.2em;
        }

        .date,
        .duration,
        .boxOffice{
            font-size: 3vw;
        }

        .sinopseContainer{
            width: 90%;
            align-items: center;
            justify-content: center;
        }

        .subTitleSinopse{
            font-size: 3.5vw;
        }

        .sinopse{
            font-size: 2.9vw;
        }

        .links{
            width: 75.5vw;
            gap: 2%;
            justify-content: center;
            align-items: center;
        }

        .watch{
            width: 50%;
            border-radius: 8px;
            padding: 5px;
            font-size: 2.5vw;  
        }

        .imgWatch{
            gap: 7%;
            height: 50%;
        }

        .imgYoutube{
            width: 22%;
            margin-bottom: 1%;
        }

        .imgDisney{
            width: 28%;
            height: 15%;
            border-radius: 10px; 
        }

        .imgAmazon{
            width: 18%;
            height: 10%;
            border-radius: 10px;

        }

        .imgNetflix{
            width: 16%;
            height: 10%;
            border-radius: 7px;
        }

        .imgHBO{
            width: 16%;
            height: 10%;
            border-radius: 7px;
        }
    }
`;