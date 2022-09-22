import styled from "styled-components";

export const Container = styled.section`

    width: 100%;
    height: 28rem;
    display: flex;
    background-size:cover;
    justify-content:center;
    align-items:center;

    @media screen and (max-width: 680px) {
        height:55rem;
    }
    @media screen and (max-width: 780px) {
        height:60rem;
    }

`;
export const Cards = styled.section`

    width: 85%;
    height: 20rem;
    display: flex;
    justify-content:center;
    align-items:center;
    margin-top:-10%;
    border-bottom: 1px solid #d6d6d6;

    @media screen and (max-width: 680px) {
        height:45rem;
        flex-direction:column;
    }
    @media screen and (max-width: 780px) {
        height:55rem;
        flex-direction:column;
       
    }

`;







 
 
 