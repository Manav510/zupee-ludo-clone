import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  drawerOpen: false,
};

export const drawerSlice = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    toggleDrawer: (state) => {
      state.drawerOpen = !state.drawerOpen;
    },
    setDrawerOpen: (state, action) => {
      state.drawerOpen = action.payload;
    },
  },
});

export const { toggleDrawer, setDrawerOpen } = drawerSlice.actions;

export default drawerSlice.reducer;