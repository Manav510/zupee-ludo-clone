import  { useState, useEffect } from 'react';
import Header_background from '../components/Header_Background';
import Scrolled_Header from '../components/Scrolled_Header';
import Game_List from '../components/Game_List';
import FilterBar from '../components/FilterBar';
import { TOURNAMENT } from '../Data/Constats_words';
const Ludo_Home_Page = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 5) { 
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {isScrolled ? <Scrolled_Header /> : <Header_background />}
      <div>
        <FilterBar />
        <h1 className='max-w-md mx-auto text-xl font-bold'>{TOURNAMENT}</h1>
        <Game_List />
      </div>
    </div>
  );
};

export default Ludo_Home_Page;