import { Banner } from "../Banner";
import { Dish } from"../Dish"
import { Video } from "../Video";
import {Lunch} from "../Lunch";
import {Chefs} from "../Chefs";
import {Blog} from "../Blog";
import {Contact} from "../Contact";
import {Footer} from "../Footer";
import {ContainerHome} from "./styles";
 
 export const Home= () => {
 
   return (
    
    <ContainerHome>
        <Banner/>
        <Dish/>
        <Video/>
        <Lunch/>
        <Chefs/>
        <Blog/>
        <Contact/>
        <Footer/>
    </ContainerHome>
   
   )
 };
 
 