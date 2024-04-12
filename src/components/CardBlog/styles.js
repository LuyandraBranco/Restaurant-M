import styled from "styled-components";

export const Card = styled.div `

    width: 20%;
    height:25rem;
    display: flex;
    flex-direction:column;
    margin:1%;
   
    @media screen and (max-width: 680px) {
        width:90%;
        height:auto;
        margin:0 auto;
    }
    @media screen and (max-width: 780px) {
        width:90%;
        margin:0 auto;
        margin-bottom:3%;
    }

`;

export const Figures = styled.div `

    width:100%;
    height:11rem;
    cursor:pointer;

    @media screen and (max-width: 780px) {
        height:15rem;
    }
    &:hover{
        animation: anim 1s;
    }
   
`;

export const Figure = styled.img `

    width:100%;
    height:100%;
    object-fit:cover;
    
`;

export const TextArea = styled.div `
    
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    text-align:justify;
    margin-bottom:1rem;
    margin-top:1.2rem;
   
`;

export const Title = styled.h1 `

    margin:0;
    color:#333;
    margin-bottom:0.8rem;
    cursor:pointer;
    text-align: left;

    &:hover{
        color:#f42f2c;
    }
   
`;



export const Description = styled.p `

    margin:0;
    color:#777;
    margin-bottom: 0.2rem;
    
`;
export const Date = styled.p `

    width:7rem;
    padding:0.2rem;
    margin:0;
    background:black;
    color:#dfdfdf;
    margin-bottom:0.8rem;
    text-align:center;

`;

export const Reactions = styled.p `

    color:#777;
    display: flex;
    align-items: center;
    gap: 0.6rem;
`;