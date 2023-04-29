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
width: 100vw;
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
width: 1100px;
border-radius: 20px;
border: red 2px solid;

    .container{
      display: flex;
      flex-direction: row;
      width: 100%;
    }

    .poster{
        height: 330px; 
        width: 240px;
        margin: 25px;
        border-radius: 20px;
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
        flex-wrap: wrap;
        gap: 3%;
        margin-bottom: 15px;
        width: 97%;
    }

    .generoContainer{
        display: flex;
        align-items: center;
        margin-bottom: 18px;
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
        width: 95%;
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

    @media screen and (min-device-width: 900px) and (max-device-width: 1200px) {

        display: flex;
        flex-direction: column;
        background-color: black;
        color: white;
        width: 800px;
        height: 80%;
        border-radius: 20px;
        border: red 2px solid;

        .container{
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
        }

        .poster{
            height: 23rem;
            width: 17rem; 
            margin: 25px 0px 25px 30px;
            border-radius: 20px;
        }

        .information{
            display: flex;
            flex-direction: column;
            height: 40%;
            width: 63%;
            align-items: center;
            justify-content: center;
        }

        .titulo{
            display: flex;
            margin-bottom: 10px;
            align-items: center;
            justify-content: center;
            max-width: inherit;
            height: 3rem;
            font-size: 35px;
            font-weight: bold;
        }

        .subTitle{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10%;
            margin-bottom: 10px;
            width: 80%;
        }

        .IMDB{
            height: 40px;
            width: 40px;
            margin-bottom: 20px;
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
            width: 80%;
            background-color: #111111;
            margin-bottom: 20px;
        }

        .subTitleBoxOffice,
        .subTitleDate,
        .subTitleDuration{
            display: flex;
            flex-direction: row;
            gap: 8px;
            color: #f5c518;
            margin: 5px 5px 2px 5px;
            font-size: 100%;
        }

        .date,
        .boxOffice,
        .duration{
            font-family: 'Roboto', sans-serif;
            font-size: 100%;
            margin: 0px 5px 5px 5px;
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
            position: relative;
            margin: 0px 210px 200px -90px;
            margin-bottom: 10px;
            background-color: #111111;
            border-radius: 8px;
            width: 720px;
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
            position: relative;
            margin-left: -300px;
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
    }

    @media screen and (min-device-width: 680px) and (max-device-width: 899px) {
   

        display: flex;
        flex-direction: column;
        background-color: black;
        color: white;
        width: 630px;
        height: 80%;
        border-radius: 20px;
        border: red 2px solid;

        .container{
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
        }

        .poster{
            height: 22rem; 
            margin: 25px 0px 25px 25px;
            border-radius: 20px;
        }

        .information{
            display: flex;
            flex-direction: column;
            height: 40%;
            width: 57%;
            align-items: center;
            justify-content: center;
        }

        .titulo{
            display: flex;
            margin-bottom: 10px;
            align-items: center;
            justify-content: center;
            max-width: inherit;
            height: 3rem;
            font-size: 30px;
            font-weight: bold;
        }

        .subTitle{
            display: flex;
            flex-direction: column;
            align-items: center;
            flex-wrap: wrap;
            gap: 10%;
            margin-bottom: 10px;
            width: 80%;
        }

        .IMDB{
            height: 40px;
            width: 40px;
            margin-bottom: 20px;
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
            width: 80%;
            background-color: #111111;
            margin-bottom: 20px;
        }

        .subTitleBoxOffice,
        .subTitleDate,
        .subTitleDuration{
            display: flex;
            flex-direction: row;
            gap: 8px;
            color: #f5c518;
            margin: 5px 5px 2px 5px;
            font-size: 100%;
        }

        .date,
        .boxOffice,
        .duration{
            font-family: 'Roboto', sans-serif;
            font-size: 100%;
            margin: 0px 5px 5px 5px;
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
            position: relative;
            margin: 0px 110px 200px -155px;
            margin-bottom: 10px;
            background-color: #111111;
            border-radius: 8px;
            width: 570px;
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
            position: relative;
            margin-left: -300px;
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
    }


    
    @media screen and (max-device-width: 680px) {
        display: flex;
        flex-direction: column;
        background-color: black;
        color: white;
        width: 85vw;
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
        margin: 25px 25px 20px 25px;
        border-radius: 20px;
        }

        .information{
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 40%;
            align-items: center;
            justify-content: center;
        }

        .titulo{
            display: flex;
            margin-bottom: 20px;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            font-size: 2.5rem;
            font-weight: bold;
        }

        .generoContainer{
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
            width: 85%;
        }

        .genero{
            display: flex;
            font-family: 'Roboto', sans-serif;
            font-size: 1.3em;
            background-color: #111111;
            padding: 5px;
            border-radius: 8px;
            color: white;
        }

        .subTitle{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            margin-bottom: 15px;
            width: 100%;
        }

        .IMDB{
            height: 75px;
            width: 65px;
            margin-right: 4%;
            margin-bottom: 2%
        }

        .imgIMDB{
            position: absolute;
            height: 85px;
            width: 75px;
        }

        .notaIMDB{
            display: flex;
            position: relative;
            color: black;
            margin-top: 39px;
            margin-left: 16px;
            height: 100px;
            width: 200px;
            font-family: 'Roboto', sans-serif;
            font-size: 1.9rem;
            font-weight: bold;
        }

        .boxOfficeContainer,
        .releaseDateOf,
        .durationContainer{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            height: 100%;
            width: 85%;
            margin: 15px 5px 2px 5px;
            background-color: #111111;
        }

        .imgSubtitle{
            height: 10%;
            width: 10%;
        }

        .subTitleBoxOffice,
        .subTitleDate,
        .subTitleDuration{
            display: flex;
            flex-direction: row;
            gap: 8px;
            color: #f5c518;
            width: 80%;
            height: 100%;
            align-items: center;
            justify-content: center;
            font-size: 4vw;
            margin: 5px;
        }

        .date,
        .boxOffice,
        .duration{
            font-family: 'Roboto', sans-serif;
            font-size: 100%;
            margin: 0px 5px 5px 5px;
        }

        

        .sinopseContainer{
            display: flex;
            flex-direction: column;
            margin-bottom: 10px;
            background-color: #111111;
            border-radius: 8px;
            width: 90%;
            align-items: center;
            justify-content: center;
        }

        .subTitleSinopse{
            display: flex;
            flex-direction: row;
            gap: 8px;
            font-size: 1.5rem;
            color: #f5c518;
            margin: 5px 0px 5px 10px;
        }

        .sinopse{
            display: flex;
            flex-direction: column;
            margin-bottom: 10px;
            margin-left: 10px;
            font-size: 1.5rem;
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


    }
`;


