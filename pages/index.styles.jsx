import styled from "styled-components";

export const Main = styled.main`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: black;
width: 100vw;
height: 100%;
`

export const Section = styled.section`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
gap: 1rem;
flex-direction: column;
justify-content: center;
align-items: center;

`

export const Card = styled.section `
display: flex;
flex-direction: column;
background-color: black;
color: white;
width: 70%;
height: 30%;
border-radius: 20px;
border: red 2px solid;

    .container{
      display: flex;
      flex-direction: row;
    }

    .poster{
        height: 20%; 
        width: 25%;
        margin: 25px;
        border-radius: 20px;
    }

    .information{
        display: flex;
        flex-direction: column;
        width: 68%;
        height: 40%;
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
        height: 100%;
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
        font-size: 100%;
        margin: 0px 5px 5px 5px;
    }

    .subTitle{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 5%;
        margin-bottom: 15px;
        width: 100%;
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

    @media screen and (min-device-width: 768px) and (max-device-width: 1200px) {
        display: flex;
        flex-direction: column;
        background-color: black;
        color: white;
        width: 70%;
        height: 30%;
        border-radius: 20px;
        border: red 2px solid;

        .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        }

        .poster{
        height: 60%; 
        width: 70%;
        margin: 25px 25px 10px 25px;
        border-radius: 20px;
        }

        .information{
            display: flex;
            flex-direction: column;
            width: 80%;
            height: 40%;
        }

        .titulo{
            display: flex;
            margin-bottom: 8px;
            align-items: center;
            justify-content: center;
            font-size: 3rem;
        }

        .subTitle{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
            flex-wrap: wrap;
            gap: 5%;
            margin-bottom: 15px;
            width: 100%;
        }

        .IMDB{
            height: 75px;
            width: 65px;
            background-color: azure
        }

        .imgIMDB{
            position: absolute;
            height: 75px;
            width: 65px;
        }

        .notaIMDB{
            display: flex;
            position: relative;
            color: black;
            margin-top: 35px;
            margin-left: 20px;
            height: 80px;
            width: 100px;
            font-family: 'Roboto', sans-serif;
        }

        .boxOfficeContainer,
        .releaseDateOf,
        .durationContainer{
            display: flex;
            flex-direction: column;
            align-items: center;
            border-radius: 8px;
            height: 100%;
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
            font-size: 100%;
            margin: 0px 5px 5px 5px;
        }

        


    }
`;


