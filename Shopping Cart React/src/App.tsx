//React and common

import React, { useState } from 'react';
import { useQuery } from 'react-query';

//Components

import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge'; 

//Assets

import { getProducts, getTotalItems } from './assets/functions';
import { CartItemType } from './assets/Types';
import Item from './components/Item/Item';
import './components/styledButton/styledButton.scss';
import { IconButton } from '@material-ui/core';
import Cart from './components/Cart/Cart';



function App() {

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(prev => {
      const isItemInCart = prev.find(item => item.id === clickedItem.id);

      if(isItemInCart){
        return prev.map(item => (
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        ));
      };

      return [...prev, { ...clickedItem, amount: 1 }]
    })
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev => (
      prev.reduce((ack, item) => {
        if(item.id === id){
          if(item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item]
        }
      }, [] as CartItemType[])
    ))
  }; 

  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getProducts
  );

  if(isLoading) return <LinearProgress />
  if(error) return <div>Something went wrong...</div>
  
  return (
    <>
      <Drawer anchor = 'right' open = { isCartOpen } onClose = { () => setIsCartOpen(false) }>
        <Cart 
          cartItems = { cartItems }
          addToCart = { handleAddToCart }
          removeFromCart = { handleRemoveFromCart }

        />
      </Drawer>
      <IconButton className = 'iconButton' onClick = { () => setIsCartOpen(true) }>
        <Badge badgeContent = { getTotalItems(cartItems) } color = 'error'>
          <AddShoppingCartIcon />
        </Badge>
      </IconButton> 
      <Grid container spacing = { 2 }>
          {
            data?.map(item => (
              <Grid item key = { item.id } xs = { 12 } sm = { 6 } md = { 4 } lg = { 3 }>
                <Item item = { item } handleAddToCart = { handleAddToCart } />
              </Grid>
            ))
          }
      </Grid>
    </> 
  )
}

export default App
