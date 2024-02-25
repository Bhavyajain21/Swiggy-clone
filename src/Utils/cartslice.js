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
    removeItem: (state, action) => {
      const arr = state.items.filter((item) => item.id != action.payload);
      state.items = arr;

      const arr1 = state.itemQuantity.filter(
        (item) => item.id != action.payload
      );
      state.itemQuantity = arr1;
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

export const { addItem, clearCart, mapPricetoQuantity, removeItem } =
  cartSlice.actions;
export default cartSlice.reducer;
