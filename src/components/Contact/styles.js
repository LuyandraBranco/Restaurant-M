import styled from "styled-components";

export const Container = styled.section`

    width: 100%;
    height: 30rem;
    display: flex;
    
    @media screen and (max-width: 680px) {
        height:42rem;
        flex-direction:column;
        
    }
    @media screen and (max-width: 780px) {
        height:58rem;
        flex-direction:column;
    }

`;

export const Mapa = styled.section`

    width: 50%;

    @media screen and (max-width: 680px) {
        width: 90%;
        margin: 0 auto;
        height:15rem;
    }
    @media screen and (max-width: 780px) {
        width: 90%;
        margin: 0 auto;
        height:30rem;
    }

`;

export const IFrame = styled.iframe`

    width: 100%;
    height:30rem;
    border:none;

    @media screen and (max-width: 680px) {
        height:15rem;
    }
    @media screen and (max-width: 780px) {
        height:30rem;
    }

`;
export const Form = styled.section`

    width: 50%;
    height:30rem;
    display:flex;
    flex-direction:column;

    @media screen and (max-width: 680px) {
        width: 100%;
        height:50rem;
        
    }
    @media screen and (max-width: 780px) {
        width: 100%;
        height:50rem;
    }

`;

export const Box = styled.div`

    width: 90%;
    height:22rem;
    margin-top:15%;
    margin-left:10%;
    display:flex;
    flex-direction:column;
    
    @media screen and (max-width: 680px) {
        margin-top:8%;
        width:100%;
        margin-left:4.4%;
        
    }
    @media screen and (max-width: 780px) {
        margin-top:8%;
        width:100%;
        margin-left:4.4%;
    }

`;

export const Input = styled.input`

    width: 65%;
    height:2.7rem;
    border:none;
    margin-bottom:1.4%;
    font-size:0.9rem;
    color:#777;
    border: 0.3px solid #dfdfdf;
    background:#fff;
    text-align:justify;

    @media screen and (max-width: 680px) {
        width: 80%;
        height:12rem;
        
    }
    @media screen and (max-width: 780px) {
        width: 90%;
    }

`;

export const TextArea = styled.textarea`

    width: 65%;
    height:10rem;
    color:#777;
    font-size:0.9rem;
    margin-bottom:2.5%;
    text-align:justify;
    border: 0.3px solid #dfdfdf;

    @media screen and (max-width: 680px) {
        width: 80%;
        height:65rem;
        
    }
    @media screen and (max-width: 780px) {
        width: 90%;
    }

`;

export const Button = styled.button`

    width: 28%;
    height:3rem;
    border:none;
    color:#fff;
    background:#f42f2c;
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight:600;
    border-radius: 5rem;
    pointer: cursor;

    @media screen and (max-width: 680px) {
        width: 45%;
        height:14rem;
    }
    @media screen and (max-width: 780px) {
        width: 40%;
    }

`;






 
 
 