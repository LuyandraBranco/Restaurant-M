import styled from "styled-components";

export const Container = styled.section`

    width: 100%;
    height: 38rem;
    display: flex;
    flex-direction:column;
    
    @media screen and (max-width: 680px) {
        height:82rem;   
    }
    @media screen and (max-width: 780px) {
        height:90rem;
    }
`;

export const TextArea = styled.aside`
    
    width:100%;
    height:12rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-itens:center;
    margin-top:2%;

`; 

export const Title = styled.h1`

    font-size:2.5rem;
    text-align:center;
    color:#333;
    margin:0;
    margin-bottom:5px;

    @media screen and (max-width: 680px) {
        font-size:2rem;
    }
    
`; 
export const Description = styled.p`

    text-align:center;
    margin:0;
    color:#777;
    
`; 

export const Cards = styled.section`

    width:100%;
    height:30rem;
    display:flex;
    justify-content:center;

    @media screen and (max-width: 680px) {
        width:90%;
        margin:0 auto;
        flex-direction:column;
        height:100rem;
    }
    @media screen and (max-width: 780px) {
        width:70%;
        margin:0 auto;
        flex-direction:column;
        height:120rem;
    }
   
`; 





 
 
 