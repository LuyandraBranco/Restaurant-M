import styled from "styled-components";

export const Container = styled.section`

    width: 100%;
    height: 52rem;
    display: flex;
    flex-direction:column;
    background:#f9f9ff;

    @media screen and (max-width: 680px) {
        height:100rem;   
    }
    @media screen and (max-width: 780px) {
        height:120rem;
    }

`;

export const TextArea = styled.aside`
    
    width:100%;
    height:12rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-top:2%;

    @media screen and (max-width: 680px) {
        margin-bottom:10%;     
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
    margin-top:5%;
    justify-content:center;

    @media screen and (max-width: 680px) {
        width:90%;
        margin:0 auto;
        flex-direction:column;
        height:100rem;
    }
    @media screen and (max-width: 780px) {
        flex-direction:column;
        height:110rem;
    }
   
`; 





 
 
 