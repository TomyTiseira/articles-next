import { CartItem } from '@/types';
import { create } from 'zustand';

interface CartState {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, 'cantidad'>, quantity?: number) => void;
  removeFromCart: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
}

export const useCartStore = create<CartState>()((set) => ({
  cartItems: [],

  // Agregar un producto al carrito
  addToCart: (item, quantity = 1) =>
    set((state) => {
      const existingItem = state.cartItems.find((i) => i.id === item.id);
      // Aumentar la cantidad del producto existente
      if (existingItem) {
        return {
          cartItems: state.cartItems.map((i) =>
            i.id === item.id ? { ...i, cantidad: i.cantidad + quantity } : i,
          ),
        };
      }
      // Agregar un nuevo producto al carrito
      return { cartItems: [...state.cartItems, { ...item, cantidad: quantity }] };
    }),

  // Eliminar un producto del carrito
  removeFromCart: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((i) => i.id !== id),
    })),

  // Aumentar la cantidad de un producto
  increaseQuantity: (id) =>
    set((state) => ({
      cartItems: state.cartItems.map((i) =>
        i.id === id ? { ...i, cantidad: i.cantidad + 1 } : i,
      ),
    })),

  // Disminuir la cantidad de un producto
  decreaseQuantity: (id) =>
    set((state) => ({
      cartItems: state.cartItems.map((i) =>
        i.id === id && i.cantidad > 1 ? { ...i, cantidad: i.cantidad - 1 } : i,
      ),
    })),
}));
