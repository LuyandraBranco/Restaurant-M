import styled from "styled-components";

export const Container = styled.footer `

    width: 100%;
    height: 35rem;
    background:#222;
    display: flex;
    flex-direction:column;

    @media screen and (max-width: 680px) {
        height:60rem;
        flex-direction:column;
    }
    
`;

export const Cards = styled.div `

    width: 80%;
    height:19rem;
    margin: 0 auto;
    margin-top:8%;
    display:flex;
    justify-content:center;

    @media screen and (max-width: 680px) {
        width:100%;
        margin:0;
        margin-top:0;
        flex-direction:column;
        height:37rem;
    }
    @media screen and (max-width: 780px) {
        height:50rem;
    }
    

`;

export const Card1 = styled.div `

    width: 26%;
    height:17rem;
    display:flex;
    flex-direction: column;
    text-align: left;
    margin-right:2%;

    @media screen and (max-width: 680px) {
        width:100%;
        height:11rem;
    }  
    
`;

export const Card2 = styled(Card1)
`

    width: 35%;
    height:17rem;

    @media screen and (max-width: 680px) {
        width:100%;
        height:15rem;
    }     

`;

export const Card3 = styled(Card1)
`
    
    width: 38%;
    height:17rem;
    margin-right:0%;

    @media screen and (max-width: 680px) {
        width:100%;
        height:12rem;
    }  
    

`;

export const Title = styled.h2 `

    color:#fff;
    margin-bottom: 1rem;
    font-size: 1.3rem;

    @media screen and (max-width: 680px) {
        margin-bottom: 0.5rem;
        margin-left: 5%;
    }

`;

export const Description = styled.p `

    color: #dfdfdf;

    @media screen and (max-width: 680px) {
        margin-left: 5%;
    }
    
`;

export const Numbers = styled.div `

`;

export const Number = styled.h1 `

    color: #f42f2c;
    margin:0;
    font-size: 1.7rem;

    @media screen and (max-width: 680px) {
        font-size: 1rem;
        margin-left: 5%;
    }
    @media screen and (max-width: 780px) {
        font-size: 1.4rem;
    }
`;

export const Input = styled.input `

    width:98%;
    height:2rem;
    border:none;
    border-radius:4rem;
    color:#777;
    font-size: 1rem;
    padding-left: 0.6rem;

    @media screen and (max-width: 680px) {
        width:90%;
        margin-left: 5%;
    }
   
`;

export const Search = styled.div `

    display:flex;

`;

export const Button = styled.button `

    width: 18%;
    height:2.1rem;
    border-radius: 4rem;
    color: #fff;
    border:none;
    margin-left:-17.9%;
    background:#f42f2c; 
    cursor: pointer;
    font-size: 1.2rem;

    @media screen and (max-width: 680px) {
        height:2.1rem;
        margin-left:-17.8%;
    }
    
`;

export const FooterContact = styled.div `

    width:100%;
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

`;

export const Text = styled.p `

    color: #dfdfdf;
    font-size:1rem;
    text-align:center;
`;

export const Span = styled.span `

    color: #f42f2c;

`;

export const RedesSociais = styled.ul `

    display:flex;
    list-style:none;
    justify-content:center;
    align-items:center;
    
`;

export const Rede = styled.li `

    color:#fff;
    margin-right: 0.4rem;
    text-align:center;
    cursor:pointer;

`;

export const Link = styled.a `

    text-decoration:none;
    color:#fff;
    font-size:1.8rem;
    text-align:center;

`;