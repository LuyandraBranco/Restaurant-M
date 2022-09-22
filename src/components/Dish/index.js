import {
    Container,
    TextArea,
    Title,
    Description,
    Cards
    
 }
 from './styles';

 import { CardDish } from '../CardDish';

 export const Dish= () => {
 
   return (

     <Container>

        <TextArea>
            <Title>Our Top Rated Dishes</Title>
            <Description>Who are in extremely love with eco friendly system.</Description>
        </TextArea>

        <Cards>

          <CardDish
             pathImg={"./images/img1.webp"}
             title={"Bread Fruit Cheese Sandwich"}
            description={"inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct. "}
          />

          <CardDish
             pathImg={"./images/img2.webp"}
             title={"Beef Cutlet with Spring Onion"}
            description={"inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct. "}
          />

          <CardDish
             pathImg={"./images/img3.webp"}
             title={"Meat with sauce & Vegetables"}
            description={"inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct. "}
          />  

        </Cards>
       

     </Container>
   )
 };