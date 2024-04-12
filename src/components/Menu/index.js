import {
    Navbar,
    Figures,
    Logo,
    StyledBurger
 }
 from './styles';
 import React, { useState } from 'react';
 import RightNav from './RightNav';
 
 export const Menu= () => {

  const [open, setOpen] = useState(false)

   return (
     <Navbar>
            <Figures>
                <Logo src='../images/logo.png' alt="Logo"/>
             </Figures>

            <StyledBurger open={open} onClick={() => setOpen(!open)}>
              <div />
              <div />
              <div />
           </StyledBurger>
          <RightNav open={open}/>
     </Navbar>
   )
 };
 
 
 
 