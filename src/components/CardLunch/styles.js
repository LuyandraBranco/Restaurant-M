import styled from "styled-components";

export const Card= styled.div`

    width: 25%;
    height: 12rem;
    display: flex;
    flex-direction:column;
    margin:2%;
    
    @media screen and (max-width: 680px) {
        width:100%;
        margin:0.5 rem;
    }
    @media screen and (max-width: 780px) {
        width:100%;
    }

`;

export const Figures = styled.div`

    width:4rem;
    height:4rem;
   
`; 

export const Figure = styled.img`
    
`; 

export const TextArea = styled.div`
    
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    text-align:justify;
    margin-bottom:1rem;
    margin-top:1rem;


    @media screen and (max-width: 680px) {
        
        
    }
    @media screen and (max-width: 780px) {
        
    }

    @media screen and (max-width: 1100px) {
    
    }
   
`; 

export const Title = styled.h1`

    margin:0;
    color:#333;
    text-transform: uppercase;
    margin-bottom:1rem;

   
`; 
export const Description = styled.p`

    margin:0;
    color:#777;
    
   
`; 






 
 
 