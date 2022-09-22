import styled from "styled-components";
import {Link} from "react-router-dom";

export const Container = styled.section`

    width: 100%;
    height: 37rem;
    display: flex;
    flex-direction:column;
    background: url('https://preview.colorlib.com/theme/restaurant/img/video-bg.jpg');
    background-size:cover;
    justify-content:center;
    align-items:center;

    @media screen and (max-width: 680px) {
        height:20rem;
    }
    @media screen and (max-width: 780px) {
        height:25rem;
    }

`;

export const Linke= styled(Link)`

    text-decoration:none;
    color:#fff;
    font-size:90px;

    @media screen and (max-width: 680px) {
        font-size:50px;
    }
    @media screen and (max-width: 780px) {
        font-size:60px;
    }

`;

export const TextArea= styled.div`

    color:#fff;

`;

export const Title= styled.h2`

    text-align:center;

`;

export const Description= styled.p`

    text-align:center;

`;







 
 
 