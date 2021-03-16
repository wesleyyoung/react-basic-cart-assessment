import {CartItem, Product} from "../types";
import create, {SetState, GetState} from 'zustand';
import {persist} from "zustand/middleware"

export const CartStorageKey = '__cart_store__';

export type CartStore = {
  items: CartItem[];
  total: number;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (product: Product) => void;
}

const calculateCartTotal: (items: CartItem[]) => number = (items: CartItem[]) =>
  items.map(i => (i.quantity * i.price)).reduce((a: number, b: number) => a + b, 0);

export const useCartStore = create<CartStore>(persist((set: SetState<CartStore>, get: GetState<CartStore>) => ({
  items: [] as CartItem[],
  total: 0,
  addToCart: (product: Product, quantity: number = 1) => set((state: CartStore) => {
    let items = state.items;
    const existingProductIndex: number = items.findIndex(item => item.id === product.id);
    if (existingProductIndex >= 0) {
      quantity = items[existingProductIndex].quantity + quantity;
      if (quantity > 0) {
        items[existingProductIndex] = {
          ...items[existingProductIndex],
          quantity,
        }
      } else {
        items = items.filter(i => i.id !== product.id);
      }
    } else {
      items.push({...product, quantity})
    }

    return {...state, items, total: calculateCartTotal(items)}
  }),
  removeFromCart: (product: Product) => set((state: CartStore) => {
    const items = state.items.filter(i => i.id !== product.id);
    return {
      ...state,
      items,
      total: calculateCartTotal(items),
    }
  }),
}), {
  name: CartStorageKey,
  getStorage: () => sessionStorage,
}));
