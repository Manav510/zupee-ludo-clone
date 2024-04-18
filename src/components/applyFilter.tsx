import  { useState } from 'react';
import {  setDrawerOpen } from '../store/drawerSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveFilters } from '../store/filterSlice';
import tabs from "../Data/filter-data";
import setting_icon from "../assets/icons8-slider-30.png"
const ApplyFilter = () => {
  const dispatch = useDispatch();
  const activeFilters = useSelector(state => state.filters.activeFilters);
  const [selectedFilters, setSelectedFilters] = useState(activeFilters);
  const handleFilterClick = (tabId, tabType) => {
    setSelectedFilters(prev => ({
      ...prev,
      [tabType]: prev[tabType] && prev[tabType].includes(tabId)
        ? prev[tabType].filter(id => id !== tabId) 
        : [...(prev[tabType] || []), tabId] 
    }));
  };

  const handleApply = () => {
    dispatch(setActiveFilters(selectedFilters));
    dispatch( setDrawerOpen(false))
  };

  const handleClearAll = () => {
    setSelectedFilters({});
  };

  const groupedTabs = tabs.reduce((acc, tab) => {
    (acc[tab.type] = acc[tab.type] || []).push(tab);
    return acc;
  }, {});

  return (
    <div className="filters-page p-4 bg-white rounded-lg shadow">
     <div className="flex items-center justify-between p-4 bg-white rounded-t-lg shadow">
      <div className="flex items-center">
        <img src={setting_icon} alt="Settings" className="inline-block h-6 w-6 mr-2" />
        <span className="text-xl font-bold">Filters</span>
      </div>

      <div className="flex-grow"></div>

      <button
        className="p-2"
        onClick={() => dispatch(setDrawerOpen(false))}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
      {Object.entries(groupedTabs).map(([type, tabs]) => (
        <div key={type} className="filter-section mb-4">
          <h4 className="font-bold text-lg mb-2">{type}</h4>
          <div className="filter-buttons grid grid-cols-2 gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleFilterClick(tab.id, tab.type)}
                className={`text-sm rounded-full py-2 ${
                  selectedFilters[tab.type] && selectedFilters[tab.type].includes(tab.id) ? 'bg-yellow-400' : 'bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      ))}
      <div className="actions flex justify-end mt-4 space-x-2">
        <button 
          className="text-purple-600 border border-purple-600 hover:bg-purple-600 hover:text-white font-semibold py-2 px-4 rounded-full transition-colors"
          onClick={handleClearAll}
        >
          Clear All
        </button>
        <button 
          className="text-white bg-yellow-400 hover:bg-yellow-500 font-semibold py-2 px-4 rounded-full transition-colors"
          onClick={handleApply}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default ApplyFilter;
