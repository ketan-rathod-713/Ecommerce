import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchLoggedInUser, fetchLoggedInUserOrders, updateUser } from './userAPI';

const initialState = {
  userInfo: null,
  userOrders: [],
  status: 'idle',
};

export const fetchLoggedInUserAsync = createAsyncThunk(
  'user/fetchLoggedInUser',
  async (userId) => {
    const response = await fetchLoggedInUser(userId);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const fetchLoggedInUserOrdersAsync = createAsyncThunk(
  'user/fetchLoggedInUseOrdersr',
  async (userId) => {
    const response = await fetchLoggedInUserOrders(userId);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const updateUserAsync = createAsyncThunk(
  'auth/updateUser',
  async (update) => {
    
    const response = await updateUser(update);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {

  },
 
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoggedInUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLoggedInUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        // this info can be different or more from loggedIn user info
        state.userInfo = action.payload;
      })
      .addCase(fetchLoggedInUserOrdersAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLoggedInUserOrdersAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        // this info can be different or more from loggedIn user info
        state.userOrders = action.payload;
        console.log("orders ",action.payload);
      })
      .addCase(updateUserAsync.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(updateUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.userInfo = action.payload; // logged in user keval ek hi he        
      })
  },
});

export const selectUserInfo = (state) => state.user.userInfo;
export const selectUserOrders = (state) => state.user.userOrders;

export default userSlice.reducer;
