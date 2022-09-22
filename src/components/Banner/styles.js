import styled from "styled-components";

export const BannerS = styled.section`

    width: 100%;
    height: 38rem;
    display: flex;
    flex-direction:column;
    background:url('https://preview.colorlib.com/theme/restaurant/img/header-bg.jpg');
    background-size:cover;

    @media screen and (max-width: 680px) {
        height:33rem;
    }
    @media screen and (max-width: 780px) {
        height:38rem;
    }

`;

export const TextArea = styled.aside`
    
    display:flex;
    flex-direction:column;
    color:#fff;
    width:50%;
    height:20rem;
    margin-left:8%;
    margin-top:10%;
    text-align:justify;
    
    @media screen and (max-width: 680px) {
        width:100%;
        margin-top:20%;
        margin-left:0;
        text-align:center;
        align-items:center;
    }
    
`; 

export const SubTitle = styled.h3`

    margin:0;
    font-weight:600;
    text-transform:uppercase;
    letter-spacing:0.2rem;

    @media screen and (max-width: 680px) {
        margin-left:5%;
    }
    @media screen and (max-width: 780px) {
        margin-left:4%;
    }

    @media screen and (max-width: 1100px) {
        margin-left:4%;
    }
   
`; 

export const Title = styled.h1`
    
    font-size:4rem;
    margin:0;
    margin-bottom:1rem;

    @media screen and (max-width: 680px) {
        margin-left:5%;
        font-size:3rem;
    }

    @media screen and (max-width: 780px) {
        margin-left:4%;
        
    }
   
`; 

export const Description = styled.p`

    margin:0;

    @media screen and (max-width: 680px) {
        margin-left:5%;
        margin-right:0.2rem;    
    }
    @media screen and (max-width: 780px) {
        margin-left:4%;    
    }
    @media screen and (max-width: 1100px) {
        margin-left:4%;
    }

`; 
export const Button = styled.button`

    border:none;
    text-transform:uppercase;
    background:#f42f2c;
    color:#fff;
    font-weight:bold;
    width:12rem;
    height:3rem;
    border-radius:4rem;
    font-size:0.9rem;
    margin-top:0.8rem;

    @media screen and (max-width: 680px) {
        height:4rem;
        padding:10px;
    }
    @media screen and (max-width: 780px) {
        margin-left:4%;
        height:3rem;
        padding:10px;
    }
    
`; 

 
 
 