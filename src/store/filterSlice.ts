import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeFilters: {
    'All': ['all'],
    'Tournament Type': [],
    'Tournament Format': [],
    'Entry Amount': [],
  },
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setActiveFilters: (state, action) => {
      state.activeFilters = action.payload;
    },
    toggleFilter: (state, action) => {
      const { id, type } = action.payload;
      console.log('Current state:', state);
console.log('Action received:', action);
      if (id === 'all') {
        if (state.activeFilters[type].includes('all')) {
          state.activeFilters[type] = [];
        } else {
          state.activeFilters[type] = ['all'];
        }
      } else {
        const index = state.activeFilters[type].indexOf('all');
        if (index > -1) {
          state.activeFilters[type].splice(index, 1);
        }
    
        const filterIndex = state.activeFilters[type].indexOf(id);
        if (filterIndex > -1) {
          state.activeFilters[type].splice(filterIndex, 1);
        } else {
        
          state.activeFilters[type].push(id);
        }
      }
    },
}});

export const { setActiveFilters, toggleFilter } = filtersSlice.actions;

export default filtersSlice.reducer;