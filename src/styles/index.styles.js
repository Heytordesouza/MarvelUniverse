import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: black;
    width: 100vw;
`

export const ButtonTop = styled.div`
    position: fixed;
    bottom: 15px;
    right: 20px;
    height: 40px;
    z-index: 1;
    width: 40px;
    border-radius: 50%;
    border: 2px solid #333;
    background-color: red;
    cursor: pointer; 
    
    :active{
        background-color: white;
    }
`

export const Container = styled.div`
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

    .movie{
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
`

export const NotFound = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    height: 10.1vh;
    font-size: 3vh;

    @media screen and (min-device-width: 900px) and (max-device-width: 1200px) {
        height: 21vh;
    }

    @media screen and (min-device-width: 680px) and (max-device-width: 899px) {
        height: 15vh;
    }

    @media screen and (min-device-width: 320px) and (max-device-width: 679px) {
        height: 43vh;
    }

    @media screen and (max-device-width: 319px) {
        height: 70vh;
    }
`;