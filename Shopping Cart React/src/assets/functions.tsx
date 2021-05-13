import { SetStateAction } from "react";
import { CartItemType } from "./Types";

export const getProducts = async (): Promise<CartItemType[]> => await( await fetch('https://fakestoreapi.com/products')).json();

export const getTotalItems = (items: CartItemType[]) => items.reduce((total: number, item) => total + item.amount, 0);
