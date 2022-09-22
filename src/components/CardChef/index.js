import {
    
    Container,
    Card,
    Figures,
    Figure,
    TextArea,
    Title,
    Description,

    
 }
 from './styles';

 
 export const CardChef= ({pathImg, title, description}) => {
 
   return (

     <Card>

       <Figures>
            <Figure src={pathImg}/>
       </Figures>

       <TextArea>
            <Title>{title}</Title>
            <Description>{description}</Description>
       </TextArea>
       
     </Card>

   )
 };