import {
  
    Card,
    Figures,
    Figure,
    TextArea,
    Title,
    Description,
    Date,
    Reactions
    
 }
 from './styles';

 import {IoIosHeartEmpty} from "react-icons/io";
 import {IoChatbubbleOutline} from "react-icons/io5";
 
 export const CardBlog= ({pathImg, date, title, description, likes, comments}) => {
 
   return (

     <Card>

       <Figures>
            <Figure src={pathImg}/>
       </Figures>

       <TextArea>
            <Date>{date}</Date>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Reactions>

              <IoIosHeartEmpty/>{likes}
              <IoChatbubbleOutline/>{comments}

            </Reactions>
       </TextArea>
       
     </Card>

   )
 };