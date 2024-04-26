import React, { useReducer } from "react";
import CartContext from "./cart-context";

// const defaultCartState = () => {
//   return {
//     items: 0,
//     totalAmount: 0,
//   };
// };

// const CartReducer = (state, action) => {
//   if (action.type === "ADD_ITEM") {
//     const updatedItems = state.items.concat(action.item);

//     const updatedTotalAmount =
//       state.totalAmount + action.item.price * action.item.amout;
//     return {
//       item: updatedItems,
//       totalAmount: updatedTotalAmount,
//     };
//   }

//   return defaultCartState;
// };

const CartContextProvider = ({ children }) => {
  // const [cartState, dispatchCartReducer] = useReducer(
  //   CartReducer,
  //   defaultCartState,
  // );

  // const addItemHandler = (item) => {
  //   dispatchCartReducer({
  //     type: "ADD_ITEM",
  //     item: item,
  //   });
  // };
  // const removeItemHandler = (id) => {
  //   dispatchCartReducer({
  //     type: "REMOVE_ITEM",
  //     id: id,
  //   });
  // };

  const addItemHandler = (item) => {}
  const removeItemHandler = (id) => {}

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;
