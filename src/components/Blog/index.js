import {
    
    Container,
    TextArea,
    Title,
    Description,
    Cards
    
 }
 from './styles';

 import { CardBlog } from '../CardBlog';

 export const Blog= () => {
 
   return (

     <Container>

        <TextArea>
            <Title>Latest From Our Blog</Title>
            <Description>orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Description>
        </TextArea>

        <Cards>

          <CardBlog
             pathImg={"./images/rice.webp"}
             date={"21 Set 2022"}
             title={"Cooking Perfect Fried Rice in minutes"}
            description={"inappropriate behavior ipsum dolor sit amet, consectetur. "}
            likes={"15 likes"}
            comments={"02 Comments"}
          />

          <CardBlog
             pathImg={"./images/eggs.webp"}
             date={"21 Set 2022"}
             title={"Secret of making Heart Shaped eggs"}
             description={"inappropriate behavior ipsum dolor sit amet, consectetur. "}
             likes={"15 likes"}
             comments={"02 Comments"}
          />

          <CardBlog
             pathImg={"./images/meat.webp"}
             date={"21 Set 2022"}
             title={"How to check steak if it is tender or not"}
             description={"inappropriate behavior ipsum dolor sit amet, consectetur."}
             likes={"15 likes"}
             comments={"02 Comments"}
          />  

          <CardBlog
             pathImg={"./images/bread.webp"}
             date={"21 Set 2022"}
             title={"Addiction When Gambling Becomes A Problem"}
             description={"inappropriate behavior ipsum dolor sit amet, consectetur."}
             likes={"15 likes"}
             comments={"02 Comments"}
          />  

        </Cards>
       
     </Container>

   )
 };