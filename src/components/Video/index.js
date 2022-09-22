import {
    Container,
    TextArea,
    Title,
    Description,
    Linke

 }
 from './styles';
 import {AiOutlinePlayCircle} from "react-icons/ai";

 export const Video= () => {
 
   return (

     <Container>

        <Linke to ="https://www.youtube.com/watch?v=0O2aH4XLbto"><AiOutlinePlayCircle/></Linke>
        
        <TextArea>

            <Title>We Always serve the vaping hot and delicious foods</Title>
            <Description>Youtube video will appear in popover</Description>
            
        </TextArea> 

     </Container>

   )
 };