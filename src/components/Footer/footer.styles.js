import styled from "styled-components";

export const Main = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    height: 10em;
    font-size: 1.3vw;
    bottom: 0;
    position: relative;
    width: 100vw;
    background-color: black;

    .createdBy{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .created{
        background-color: white;
        padding: 0.2em 0.6em;
        border-radius: 10px;
        color: black;
        margin-bottom: 2%;
    }

    .containerContacts{
        display: flex;
        flex-direction: column;
    }

    .contacts{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 8%;
        margin: 2%;
        width: 100%;

        img{
            display: flex;
            width: 2vw;
            border-radius: 2px;
        }
    }

    @media screen and (min-device-width: 680px) and (max-device-width: 899px){
        flex-direction: row;
        font-size: 2vw;
        width: 60vw;
        height: 5.7em;
        gap: 20%;

        .created{
            margin: 5% 0%;
        }

        .containerContacts{
            justify-content: center;
            align-items: center;
            width: 20%;
        }

        .contacts{
            gap: 25%;
            margin: 8%;
            
            img{
                width: 4vw;
            }
        }
    }

    @media screen and (max-device-width: 679px) {
        flex-direction: row;
        font-size: 4vw;
        width: 85vw;
        height: 5.8em;
        gap: 20%;
        margin: 6% 0%;

        .containerContacts{
            justify-content: center;
            align-items: center;
            width: 20%;
        }

        .contacts{
            gap: 18%;
            
            img{
                width: 6vw;
            }
        }
    }
`

