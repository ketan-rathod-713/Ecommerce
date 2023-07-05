import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createOrder } from './orderAPI';

const initialState = {
  orders: [],
  status: 'idle',
  currentOrder: null
};
// we may need more info of current order

export const createOrderAsync = createAsyncThunk(
  'order/createOrder',
  async (order) => {
    const response = await createOrder(order);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
   resetOrder: (state)=>{
    state.currentOrder = null;
   }
  },
 
  extraReducers: (builder) => {
    builder
      .addCase(createOrderAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createOrderAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.orders.push(action.payload);
        state.currentOrder = action.payload // order properly placed ho chuka he
      });
  },
});

export const {resetOrder} = orderSlice.actions;

export const selectOrders = (state) => state.order.orders;
export const selectCurrentOrder = (state) => state.order.currentOrder;

export default orderSlice.reducer;
// we are exporting a reducer