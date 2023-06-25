import { create } from "zustand";
import { Product } from "../utilities/types";
import { Products } from "./Items";

interface CartItem extends Product {
  amount: number;
}

type Store = {
  totalAmount: number;
  totalPrice: number;
  cart: CartItem[];
  currentItem: CartItem | null;
  amount: number;
  addToCart: (item: Product) => void;
  removeFromCart: (id: number) => void;
  increaseAmount: (id: number) => void;
  decreaseAmount: (id: number) => void;
};

const useStore = create<Store>((set, get) => ({
  totalAmount: 0,
  totalPrice: 0,
  cart: [],
  amount: 0,
  currentItem: null,

  addToCart: (item) => {
    const items = get().currentItem;
    const cartItems = get().cart; 
    if (items?.id === item.id) {
      set((state) => {
        return {
          ...state,
          cart: [...cartItems,{ ...items, amount: items.amount }],
        };
      });
      return;
    } 
  },

  removeFromCart: (id) => {},
  increaseAmount: (id) => {
    /// increase amount if exist
    const current = get().currentItem;
    if (current?.id === id) {
      set((state) => {
        return {
          ...state,
          currentItem: {
            ...current,
            amount: current.amount + 1,
          },
        };
      });
    } else {
      set((state) => {
        const product = Products.find((item) => item.id === id);
        console.log(product?.id);
        if (!product) return state;
        return {
          ...state,
          currentItem: {
            ...product,
            amount: 1,
          },
        };
      });
    }
  },

  decreaseAmount: (id) => {
    const current = get().currentItem;
    if (current) {
      set((state) => {
        return {
          ...state,
          currentItem: {
            ...current,
            amount: current.amount - 1,
          },
        };
      });
    }
    /// remove item from cart
    if (current?.amount === 0) {
      set((state) => {
        return {
          ...state,
          currentItem: null,
        };
      });
    }
  },
}));

export default useStore;
