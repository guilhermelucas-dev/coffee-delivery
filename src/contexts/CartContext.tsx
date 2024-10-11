import { createContext, ReactNode, useReducer } from "react";
import { cartReducer, Item, Order } from "../reducers/cart/reducer";
import { addItemAction, checkoutCartAction, decrementItemQuantityAction, incrementItemQuantityAction, removeItemAction } from "../reducers/cart/actions";
import { useNavigate } from "react-router-dom";

export interface OrderData {
  cep: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  paymentMethod: "credit" | "debit" | "money";
}

interface CartContextType {
  cart: Item[],
  orders: Order[],
  addItem: (item: Item) => void,
  removeItem: (itemId: Item['id']) => void,
  decrementItemQuantity: (itemId: Item['id']) => void,
  incrementItemQuantity: (itemId: Item['id']) => void,
  checkout:(order: OrderData) => void,
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
      orders: []
    },
  );

  const navigate = useNavigate();

  const { cart, orders } = cartState;

  function addItem(item: Item) {
    dispatch(addItemAction(item));
  }

  function removeItem(itemId: Item['id']) {
    dispatch(removeItemAction(itemId))
  }

  function incrementItemQuantity(itemId: Item['id']) {
    dispatch(incrementItemQuantityAction(itemId));
  }

  function decrementItemQuantity(itemId: Item['id']) {
    dispatch(decrementItemQuantityAction(itemId));
  }

  function checkout(order: OrderData) {
    dispatch(checkoutCartAction(order, navigate));
  }

  return (
    <CartContext.Provider 
    value={{
      cart,
      orders,
      addItem,
      removeItem,
      decrementItemQuantity,
      incrementItemQuantity,
      checkout,
    }}
    >
      {children}
    </CartContext.Provider>
  )
}