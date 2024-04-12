import styled from "styled-components";

export const Navbar = styled.nav`

    width: 100%;
    height: 3.5rem;
    display: flex;
    justify-content: space-between;

`;

export const Figures = styled.div`

    width: 48%;
    height: 3.5rem;
    display:flex;

`;

export const Logo= styled.img`

    width:3.2rem;
    height:1.5rem;
    padding: 15px 120px;

    @media screen and (max-width: 680px) {
       padding: 9px 9px;    
    }
    
`;

export const StyledBurger = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  top: 10px;
  right: 20px;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#ccc' : '#f42f2c'};
    border-radius: 10px;
    transform-origin: center;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg) translate(6px, 6px)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg) translate(6px, -6px)' : 'rotate(0)'};
    }
  }
`;


export const RightList= styled.ul`

  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #f42f2c;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
      margin-bottom: 1rem;
    }
  }
`;

export const Item= styled.li`

    list-style:none;
    margin-right: 1.5rem;
    text-transform: uppercase;
    color:#333;
    font-size:12px;
    font-weight:bold;
    cursor: pointer;
    
`;

export const Ative= styled.li`

    color: #f42f2c;
    
`;
