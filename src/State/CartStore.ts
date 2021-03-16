import {CartItem, Product} from "../Types";
import create, {SetState, GetState} from 'zustand';
import {persist} from "zustand/middleware"
import {CartService} from "../Services";

export const CartStorageKey = '__cart_store__';

export type CartStore = {
  items: CartItem[];
  total: number;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (product: Product) => void;
}

export const useCartStore = create<CartStore>(persist((set: SetState<CartStore>, get: GetState<CartStore>) => ({
  items: [] as CartItem[],
  total: 0,
  addToCart: (product: Product, quantity: number = 1) => set((state: CartStore) => ({
    ...state,
    ...CartService.addItemToCart(product, quantity, {items: state.items, total: state.total})
  })),
  removeFromCart: (product: Product) => set((state: CartStore) => ({
    ...state,
    ...CartService.removeItemFromCart(product, {items: state.items, total: state.total})
  })),
}), {
  name: CartStorageKey,
  getStorage: () => sessionStorage,
}));
