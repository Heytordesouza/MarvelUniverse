import styled from "styled-components";

export const ImageMarvel = styled.div`
    display: flex;
    height: 50vh;
    width: 100%;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to bottom, transparent 0%, black 90%), url(marvel.jpg);
    background-repeat: no-repeat;
    background-size: 100%;

        @media screen and (min-device-width: 900px) and (max-device-width: 1200px) {
            height: 45vh;
        }

        @media screen and (min-device-width: 680px) and (max-device-width: 899px) {
            height: 35vh;
        }

        @media screen and (min-device-width: 320px) and (max-device-width: 679px) {
            height: 20vh;
        }

        @media screen and (max-device-width: 319px) {
            height: 10vh;
        }

`

export const Input = styled.div`
    align-items: center;
    justify-content: center;
    width: 30%;

    label{
        display: block; 
        position: relative; 
        bottom:-10px; 
        width:fit-content; 
        left:10px; 
        padding:0px 5px; 
        background-color:black;
        color: white;
        font-size: 1.2vw;
    }

    input{
        border:2px solid red; 
        height: 10%; 
        width:100%;
        padding: 3% 3%;
        font-weight:bold;
        background-color:black;
        color: white;
        border-radius: 7px;
        font-size: 1.2vw;
    }
`
export const Ordenacao = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1%;
    margin-bottom: 1%;
    width: 100%;

    label{
        text-align: center;
        color: white;
        width: 40%;
        font-size: 1.2vw;
    }

    select{
        width: 40%;
        color: white;
        background-color: black;
        border: 2px solid red; 
        border-radius: 7px;
        margin-left: 10px;
        font-size: 1.2vw;
    }
    
    
`