import {gamesData} from '../Data/game-data'
import tabs from '../Data/filter-data'

export const selectFilteredGames = (state) => {
  const { activeFilters } = state.filters;

  // First, filter games based on active filters
  const filteredGames = gamesData.filter(game => {
    return Object.keys(activeFilters).every(filterType => {
      const filters = activeFilters[filterType];
      if (filters.length === 0 || filters.includes('all')) {
        return true;
      }
      return filters.some(filterId => {
        const tab = tabs.find(tab => tab.id === filterId);
        return tab ? tab.filter(game) : true;
      });
    });
  });

  filteredGames.sort((a, b) => a.timeLeft - b.timeLeft);

  return filteredGames;
};