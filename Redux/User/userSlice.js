const { createSlice } = require('@reduxjs/toolkit');
import { fetchUserData, login } from './actions';

const initialState = {
  data: null,
  loading: false,
  error: null,
  fetchedData:null
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.fetchedData = action.payload;
        state.error = null;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.fetchedData = null;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
