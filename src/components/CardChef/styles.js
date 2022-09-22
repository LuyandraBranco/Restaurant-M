import styled from "styled-components";

export const Card= styled.div`

    width: 20%;
    height:35rem;
    display: flex;
    flex-direction:column;
    margin:1%;
    
    
    @media screen and (max-width: 680px) {
        width:100%;
        margin:0;
    }
    @media screen and (max-width: 780px) {
        width:100%;
    }

`;

export const Figures = styled.div`

    width:100%;
    height:20rem;
   
`; 

export const Figure = styled.img`

    width:100%;
    height:100%;
    object-fit:cover;
    
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
    text-align:center;

   
`; 
export const Description = styled.p`

    margin:0;
    color:#777;
    text-align:center;
    
   
`; 






 
 
 