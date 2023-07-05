import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { checkUser, createUser, updateUser } from './authAPI';

const initialState = {
  user: null,
  status: 'idle',
  error: null
};

export const createUserAsync = createAsyncThunk(
  'auth/createUser',
  async (userData) => {
    const response = await createUser(userData);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const checkUserAsync = createAsyncThunk(
  'auth/checkUser',
  async (loginInfo) => {
    const response = await checkUser(loginInfo);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      state.value += 1;
    }
  },
 
  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.user  = action.payload;
      })
      .addCase(checkUserAsync.pending, (state) => {
        state.status = 'loading';
        state.error = null
      })
      .addCase(checkUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.user  = action.payload; // here user means loggedInuser
      })
      .addCase(checkUserAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.error  = action.error;
      })
     
  },
});

export const selectUser = (state) => state.auth.user;
export const selectError = (state) => state.auth.error;

export default authSlice.reducer;
