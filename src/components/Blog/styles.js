import styled from "styled-components";

export const Container = styled.section`

    width: 100%;
    height: 49rem;
    display: flex;
    flex-direction:column;

    @media screen and (max-width: 680px) {
        height:114rem; 
    }
    @media screen and (max-width: 780px) {
        height:128rem;
    }

`;

export const TextArea = styled.aside`
    
    width:50%;
    margin:0 auto;
    height:12rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-top:3%;

    @media screen and (max-width: 680px) {
        
        width:100%;
        margin:0;
        margin-bottom:0.5%;
        height:10rem; 
    }
    @media screen and (max-width: 780px) {
        width:100%;
        margin-top:0.5%; 
    }

   
`; 

export const Title = styled.h1`

    font-size:2.5rem;
    text-align:center;
    color:#333;
    margin:0;
    margin-bottom:5px;
    text-align:center;

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
    margin-top:2%;
    justify-content:center;

    @media screen and (max-width: 680px) {
        width:90%;
        margin:0 auto;
        flex-direction:column;
        height:100rem;
        margin-top:0.5%;
    }
    @media screen and (max-width: 780px) {
        width:90%;
        margin:0 auto;
        flex-direction:column;
        height:110rem;
        margin-top:0.5%;
    }
   
`; 





 
 
 