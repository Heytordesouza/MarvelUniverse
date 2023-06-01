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