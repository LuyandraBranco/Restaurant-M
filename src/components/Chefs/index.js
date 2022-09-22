import {
    
    Container,
    TextArea,
    Title,
    Description,
    Cards
    
 }
 from './styles';

 import { CardChef } from '../CardChef';

 export const Chefs= () => {
 
   return (

     <Container>

        <TextArea>
            <Title>Meet Our Qualified Chefs</Title>
            <Description>Who are in extremely love with eco friendly system.</Description>
        </TextArea>

        <Cards>

          <CardChef
             pathImg={"./images/chef1.webp"}
             title={"Ivan Ralston"}
            description={"Managing Director (Sales)"}
          />

          <CardChef
             pathImg={"./images/chef2.webp"}
             title={"Sei Shiroma"}
            description={"Creative Art Director (Project)"}
          />

          <CardChef
             pathImg={"./images/chef3.webp"}
             title={"Felipe Schaedler"}
            description={"Senior Core Developer"}
          />  

          <CardChef
             pathImg={"./images/chef4.webp"}
             title={"Tadashi Shiraishi"}
            description={"Creative Content Developer"}
          />  

        </Cards>
       
     </Container>

   )
 };