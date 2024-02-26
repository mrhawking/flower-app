import { createContext, useEffect, useReducer, useState } from 'react';
import { updateCart, fetchCart } from '../http.js';

const CartContext = createContext({
  items: [],
  // eslint-disable-next-line no-unused-vars
  addItem: (item, count) => { },
  // eslint-disable-next-line no-unused-vars
  removeItem: (id) => { },
  clearCart: () => { },
  // eslint-disable-next-line no-unused-vars
  removeEntireItem: (id) => { },
  // eslint-disable-next-line no-unused-vars
  setCartItems: (cart) => {},
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

  if (action.type === 'SET_ITEMS') {
    if (action.cart) {
      return { ...state, items: action.cart.items }
    } else {
      console.log('данных нет')
    }
  }

  if (action.type === 'CLEAR') {
    return { ...state, items: [] }
  }

  return state;
}

export function CartContextProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, { items: [] });
  const [isInitial, setIsInitial] = useState(true);

  useEffect(() => {
    async function fetchCartItems() {
      try {
        const data = await fetchCart();
        setCartItems(data);
      } catch(error) {
        console.log(error);
      }
    }
    if (isInitial) {
      fetchCartItems();
      setIsInitial(false);
    }
  }, [isInitial])

  useEffect(() => {
    async function updateCartTitems() {
      try {
        const data = await updateCart(cart);
        console.log(data);
      } catch(error) {
        console.log(error);
      }
    }
    if (!isInitial) {
      updateCartTitems();
    }
  }, [cart, isInitial])

  function addItem(item, count) {
    dispatch({ type: 'ADD_ITEM', payload: { item: item, count: count } });
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

  function setCartItems(cart) {
    dispatch({type: 'SET_ITEMS', cart: cart})
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