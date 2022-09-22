import styled from "styled-components";

export const Card= styled.div`

    width: 25%;
    height:25rem;
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
    height:15rem;
    cursor:pointer;

    &:hover{
        animation: anim 1s;
    }
   
`; 

export const Figure = styled.img`

    width:100%;
    height:100%;
    object-fit:cover;

    &:hover{
        animation: anim 1s;
    }
    
`; 

export const TextArea = styled.div`
    
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    text-align:justify;
    margin-bottom:1rem;
    margin-top:1rem;
   
`; 

export const Title = styled.h1`

    margin:0;
    color:#333;
    text-transform: uppercase;
    margin-bottom:1rem;
    cursor:pointer;

    &:hover{
        color:#f42f2c;
    }

`; 
export const Description = styled.p`

    margin:0;
    color:#777;
    
   
`; 






 
 
 