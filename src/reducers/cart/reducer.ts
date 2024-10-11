import { OrderData } from "../../contexts/CartContext";
import { Actions, ActionTypes } from "./actions";

export interface Item {
  id: string,
  quantity: number,
}

export interface Order extends OrderData {
  id: number,
  items: Item[]
}

interface CartState {
  cart: Item[],
  orders: Order[]
}

export function cartReducer(state: CartState, action: Actions) {
  switch (action.type) {

    case ActionTypes.ADD_ITEM: {
      const updatedCart = [...state.cart]; // Cria uma cópia do carrinho atual
      const itemAlreadyAdded = updatedCart.find(
        (item) => item.id === action.payload.item.id
      );
      if (itemAlreadyAdded) {
        // Atualiza a quantidade do item existente
        itemAlreadyAdded.quantity += action.payload.item.quantity;
      } else {
        // Adiciona um novo item ao carrinho
        updatedCart.push(action.payload.item);
      }
      return { ...state, cart: updatedCart }; // Retorna o estado atualizado
    }

    case ActionTypes.REMOVE_ITEM: {
      const updatedCart = [...state.cart];
      const itemToRemoveId = updatedCart.findIndex((item) => item.id === action.payload.itemId);
      if (itemToRemoveId !== -1) {
        updatedCart.splice(itemToRemoveId, 1);
      }
      return { ...state, cart: updatedCart};
    }

    case ActionTypes.INCREMENT_ITEM_QUANTITY: {

      const updateCart = state.cart.map((item) => ({...item}));

      const itemToIncrement = updateCart.find((item) => item.id === action.payload.itemId);

      if (itemToIncrement) {
        itemToIncrement.quantity += 1;
      }

      return {...state, cart: updateCart};
    }

    case ActionTypes.DECREMENT_ITEM_QUANTITY: {
      const updateCart = state.cart.map((item) => ({...item}));
      const itemToDecrement = updateCart.find((item) => item.id === action.payload.itemId);

      if (itemToDecrement?.id && itemToDecrement.quantity > 1) {
        itemToDecrement.quantity -= 1
      }

      return {...state, cart: updateCart};
    }

    case ActionTypes.CHECKOUT_CART: {

      const newOrder = {
        id: new Date().getTime(),
        items: state.cart,
        ...action.payload.order,
      }

      const updateOrders = [...state.orders, newOrder];

      const updateCart:Item[] = [];

      action.payload.callback(`/order/${newOrder.id}/success`);

      return { ...state, orders: updateOrders, cart: updateCart};
      
    } 

    default:
      return state; // Caso padrão: retorna o estado sem modificação
  }
}