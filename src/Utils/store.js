import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartslice";

const store = configureStore({
  reducer: { cart: cartSlice },
});

export default store;

/**
 *
 * Create Store
 *    - configureStore() - RTK
 *
 * Provide my Store to application
 *    - <Provider store={store}></Provider> - react-redux
 *
 * Slice
 *    - createSlice({
 *         name:"cart",
 *         initialState:[],
 *         reducers:{
 *            addItem:(state, action)=>{
 *
 *            }
 *         }
 *      }) - RTK
 *
 * export default cartSlice.reducer;
 * export const {addItem} = cartSlice.actions;
 *
 *  Put that slice in store
 *
 *
 *   - {
 *        reducer:{
 *          cart:cartSlice
 *        }
 *     }
 */
