import {Cart, CartItem, Product} from "../Types";

export class CartService {

  public static calculateCartTotal: (items: CartItem[]) => number = (items: CartItem[]) =>
    items.map(i => (i.quantity * i.price)).reduce((a: number, b: number) => a + b, 0);

  public static removeItemFromCart(product: Product, cart: Cart): Cart {
    const items = cart.items.filter(i => i.id !== product.id);
    return {
      items,
      total: CartService.calculateCartTotal(items),
    }
  }

  public static addItemToCart(product: Product, quantity: number = 1, cart: Cart): Cart {
    let items = cart.items;
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

    return {items, total: CartService.calculateCartTotal(items)}
  }
}
