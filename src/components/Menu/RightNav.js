import React from 'react';
import {
    RightList,
    Item
 } from './styles';

const RightNav = ({ open }) => {
  return (

    <RightList open={open}>

        <Item>Home</Item> 
        <Item>Dish</Item> 
        <Item>Chefs</Item> 
        <Item>Blog</Item> 
        <Item>Contact</Item> 
        <Item>Pages</Item> 

    </RightList>
  )
}

export default RightNav