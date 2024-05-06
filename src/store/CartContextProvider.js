import CartContext from "./cart-context";
import React, { useReducer } from "react";

const defaultCartState = {
  cartItems: [],
  totalAmount: 0,
};

const CartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.cartItems.findIndex((item) => {
      return item.id === action.item.id;
    });

    const existingCartItem = state.cartItems[existingCartItemIndex];

    let updatedItem;
    let updatedItems;

    if (existingCartItem) {
      updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };

      updatedItems = [...state.cartItems];
      updatedItems[existingCartItemIndex] = updatedItem;

      // Если существующий товар уже присутствует в корзине (existingCartItem не равен undefined), то его количество обновляется. Мы создаем копию существующего товара (existingCartItem) и увеличиваем его количество на количество новых единиц товара (action.item.amount). Затем мы обновляем список товаров в корзине (updatedItems), заменяя существующий товар на обновленный товар по его индексу.
    } else {
      updatedItem = {
        ...action.item,
      };
      updatedItems = state.cartItems.concat(updatedItem);
    }

    return {
      cartItems: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    const existingCartItemIndex = state.cartItems.findIndex((item) => {
      return item.id === action.id;
    });

    const existingCartItem = state.cartItems[existingCartItemIndex];

    const updatedTotalAmount = state.totalAmount - existingCartItem.price;

    let updatedItems;

    if (existingCartItem.amount === 1) {
      updatedItems = state.cartItems.filter((item) => item.id != action.id);
    } else {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedItems = [...state.cartItems];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      cartItems: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

const CartContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    CartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    dispatchCartAction({
      type: "ADD_ITEM",
      item: item,
    });
  };

  const removeItemHandler = (id) => {
    dispatchCartAction({
      type: "REMOVE_ITEM",
      id: id,
    });
  };

  const cartContext = {
    cartItems: cartState.cartItems,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
