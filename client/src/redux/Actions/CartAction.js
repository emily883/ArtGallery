import { ADD_CART,REMOVE_CART } from "../Types";

export function addItemToCart(storage) {
  return {
    type: ADD_CART,
    payload: [storage, { quantity: 1 }],
  };
}

export function removeItemFromCart(item){
  return{
    type: REMOVE_CART,
    payload: item
  }
}

// export function AddQuantity(id, quantity) {
//   return {
//     type: QUANTITY_ITEM,
//     payload: {
//       id: id,
//       quantity: quantity,
//     },
//   };
// }
