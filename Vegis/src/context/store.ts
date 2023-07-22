import { create } from "zustand";
import { Product } from "../utilities/types";
import { Products } from "./Items";

interface CartItem extends Product {
  amount: number;
  totalPrice?: number;
}

type Store = {
  totalAmount: number;
  totalPrice: number;
  cart: CartItem[];
  currentItem: CartItem | null;
  // gettotalprice: (item: Product) => number;
  addToCart: (item: Product) => void;
  // removeFromCart: (id: number) => void;
  increaseAmount: (id: number) => void;
  decreaseAmount: (id: number) => void;
  increaseFromCart: (id: number) => void;
  decreaseFromCart: (id: number) => void;
  gettotalprice: (items: CartItem[]) => number;
};

const useStore = create<Store>((set, get) => ({
  totalAmount: 0,
  totalPrice: 0,
  cart: [],
  currentItem: null,

  addToCart: (item) => {
    const items = get().currentItem!;
    const cartItems = get().cart;

    // Check if the item already exists in the cart
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === items?.id
    );

    if (existingItemIndex !== -1) {
      // If the item already exists in the cart, update its quantity and total price
      set((state) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems[existingItemIndex].amount += items.amount;
        updatedCartItems[existingItemIndex].totalPrice =
          parseInt(updatedCartItems[existingItemIndex].price) *
          updatedCartItems[existingItemIndex].amount;

        return {
          ...state,
          cart: updatedCartItems,
          currentItem: {
            ...items,
            amount: 0,
          },
        };
      });
    } else {
      // If the item does not exist in the cart, add it as a new item
      set((state) => {
        return {
          ...state,
          cart: [
            ...cartItems,
            {
              ...items,
              totalPrice: parseInt(items.price) * items.amount,
            },
          ],
          currentItem: {
            ...items,
            amount: 0,
          },
        };
      });
    }
  },

  gettotalprice: (items) => {
    const total = items.reduce((acc, item) => {
      return acc + item.totalPrice!;
    }, 0);
    return total;
  },

  increaseFromCart: (id) => {
    set((state) => {
      const updatedCart = state.cart.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            amount: item.amount + 1,
            totalPrice: parseInt(item.price) * (item.amount + 1),
          };
        }
        return item;
      });

      // Increase the current item amount if it exists
      const current = state.currentItem;
      if (current && current.id === id) {
        return {
          ...state,
          cart: updatedCart,
          currentItem: {
            ...current,
            amount: 0,
          },
        };
      }

      return {
        ...state,
        cart: updatedCart,
      };
    });
  },

  decreaseFromCart: (id) => {
    set((state) => {
      const updatedCart = state.cart.map((item) => {
        if (item.id === id) {
          if (item.amount === 1) {
            const confirmed = window.confirm(
              "Do you want to remove this item from the cart?"
            );
            if (confirmed) {
              return null; // Mark the item for removal
            }
          } else {
            return {
              ...item,
              amount: item.amount - 1,
              totalPrice: parseInt(item.price) * (item.amount - 1),
            };
          }
        }
        return item;
      });

      return {
        ...state,
        cart: updatedCart.filter((item) => item !== null) as CartItem[],
      };
    });
  },

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
