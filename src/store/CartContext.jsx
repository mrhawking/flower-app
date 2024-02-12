import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  // eslint-disable-next-line no-unused-vars
  addItem: (item, count) => { },
  // eslint-disable-next-line no-unused-vars
  removeItem: (id) => { },
  clearCart: () => { },
  // eslint-disable-next-line no-unused-vars
  removeEntireItem: (id) => { }
});

// const flower2 = {
//   ...flower1,
//   size: { ...flower1.size },
//   composition: flower1.composition.map((item) => ({ ...item })),
// };


function cartReducer(state, action) {
  if (action.type === 'ADD_ITEM') {
    const existingItemIndex = state.items.findIndex(item => item.id === action.payload.item.id);
    // const updatedItems = state.items.map(item => ({ ...item, size: { ...item.size }, composition: item.composition.map(comp => ({ ...comp })) }));
    const updatedItems = [...state.items]

    if (existingItemIndex > -1) {
      const existingItem = state.items[existingItemIndex]
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + action.payload.count
      }
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.payload.item, quantity: action.payload.count })
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === 'REMOVE_ITEM') {
    const existingItemIndex = state.items.findIndex(item => item.id === action.id);
    const existingItem = state.items[existingItemIndex];
    const updatedItems = [...state.items];

    if (existingItem.quantity === 1) {
      updatedItems.splice(existingItemIndex, 1);
    } else {
      const updatedItem = { ...existingItem, quantity: existingItem.quantity - 1 };
      updatedItems[existingItemIndex] = updatedItem;
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === 'REMOVE_ENTIRE_ITEM') {
    const existingItemIndex = state.items.findIndex(item => item.id === action.id);
    const updatedItems = [...state.items];
    updatedItems.splice(existingItemIndex, 1);
    return { ...state, items: updatedItems };
  }

  if (action.type === 'CLEAR') {
    return { ...state, items: [] }
  }

  return state;
}

export function CartContextProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, { items: [] });

  function addItem(item, count) {
    dispatch({ type: 'ADD_ITEM', payload: {item: item, count: count} });
  }
  function removeItem(id) {
    dispatch({ type: 'REMOVE_ITEM', id: id });
  }
  function clearCart() {
    dispatch({ type: 'CLEAR' });
  }

  function removeEntireItem(id) {
    dispatch({ type: 'REMOVE_ENTIRE_ITEM', id: id });
  }

  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
    clearCart,
    removeEntireItem,
  };

  return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
}

export default CartContext;