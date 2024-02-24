import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    itemQuantity: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
    mapPricetoQuantity: (state, action) => {
      let arr = state.itemQuantity;
      let updated = false;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].id == action.payload.id) {
          arr[i].quantity = action.payload.quantity;
          updated = true;
          break;
        }
      }
      if (!updated) state.itemQuantity.push(action.payload);
    },
  },
});

export const { addItem, clearCart, mapPricetoQuantity } = cartSlice.actions;
export default cartSlice.reducer;
