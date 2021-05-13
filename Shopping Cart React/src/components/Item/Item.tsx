import React from 'react';
import './item.scss';
import Button from '@material-ui/core/Button';
import { ItemProps } from '../../assets/Types';



const Item: React.FC<ItemProps> = ({ item, handleAddToCart }) => (
    <article className = 'item'>
        <img src = { item.image } className = 'item__img' alt = { item.title } />
        <div className = 'item__info'>
            <h2>{ item.title }</h2>
            <p>{ item.description }</p>
            <h3>$ { item.price }</h3>
        </div>
        <Button onClick = { () => handleAddToCart(item) }>Add to cart</Button>
    </article>
);

export default Item;