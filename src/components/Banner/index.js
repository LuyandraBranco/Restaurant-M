import {
    BannerS,
    TextArea,
    SubTitle,
    Title,
    Description,
    Button
 }
 from './styles';
 import { Menu } from '../Menu';
 
 export const Banner= () => {
 
   return (
     <BannerS>
        
        <Menu/>

        <TextArea>

            <SubTitle>Wide Options of Choice</SubTitle>
            <Title>Delicious Receipes </Title>
            <Description>Lorem ipsum dolor sit amet,
                         consectetur adipisicing elit, sed do eiusmod temp
                        or incididunt ut labore et dolore magna aliqua.
                         Ut enim ad minim.
             </Description>

            <Button>Check Our Menu</Button>
        </TextArea>

     </BannerS>
   )
 };