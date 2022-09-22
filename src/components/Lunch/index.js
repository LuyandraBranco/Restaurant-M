import {

    Container,
    Cards
    
 }
 from './styles';

 import {CardLunch} from "../CardLunch"

 export const Lunch= () => {
 
   return (

     <Container>

        <Cards>

        <CardLunch
             pathImg={"./images/breakfast.png"}
             title={"Refreshing Breakfast"}
            description={"Lorem ipsum dolor sit ametcons ecteturadipis icing elit. "}
          />

        <CardLunch
             pathImg={"./images/lunch.png"}
             title={"Awesome Lunch"}
            description={"Lorem ipsum dolor sit ametcons ecteturadipis icing elit. "}
          />

        <CardLunch
             pathImg={"./images/dinner.png"}
             title={"Soothing Dinner"}
            description={"Lorem ipsum dolor sit ametcons ecteturadipis icing elit. "}
          />

        <CardLunch
             pathImg={"./images/rich.png"}
             title={"Rich Quality Buffet"}
            description={"Lorem ipsum dolor sit ametcons ecteturadipis icing elit. "}
          />

        <hr/>

        </Cards>

     </Container>

   )
 };