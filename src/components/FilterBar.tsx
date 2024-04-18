import { useSelector, useDispatch } from 'react-redux';
import { toggleFilter } from '../store/filterSlice';
import tabs from "../Data/filter-data";
import { Drawer } from 'rsuite';
import ApplyFilter from './applyFilter';
import {  setDrawerOpen } from '../store/drawerSlice';
import seeting_icon from "../assets/icons8-slider-30.png"
const FilterBar = () => {
  const dispatch = useDispatch();
  const activeFilters = useSelector((state) => state.filters.activeFilters);
  const drawerOpen = useSelector((state) => state.drawer.drawerOpen);
  const handleTabClick = (tabId, tabType) => {
    dispatch(toggleFilter({ id: tabId, type: tabType }));
  };

  const handleAllClick = () => {
    dispatch(setDrawerOpen(true));
  };

  return (
    <div className="sticky top-16 z-10 max-w-md mx-auto bg-gray-100 p-2 rounded-lg overflow-hidden">
      <div className="flex overflow-x-auto no-scrollbar">
        <button
          onClick={handleAllClick}
          className={`text-sm px-4 py-2 mr-2 flex-none rounded-full ${drawerOpen ? 'bg-yellow-400' : 'bg-gray-200'}`}
        >
        <img src={seeting_icon} alt="Multiple People" className="inline-block h-6 w-6 mr-2" />

        </button>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id, tab.type)}
            className={`text-sm px-4 py-2 mr-2 last:mr-0 flex-none rounded-full ${
              activeFilters[tab.type] && activeFilters[tab.type].includes(tab.id) ? 'bg-yellow-400' : 'bg-gray-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} placement="bottom" size="full">
  <div className="top-30 z-10 max-w-md mx-auto">
   
    <Drawer.Body>
      <ApplyFilter />
    </Drawer.Body>
  </div>
</Drawer>
     

    </div>
  );
};

export default FilterBar;

