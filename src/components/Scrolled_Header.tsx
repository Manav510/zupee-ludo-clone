import VideoInfoIcon from '../assets/icons8-next-52.png';
import { MONEY } from '../Data/Constats_words';
const Scrolled_Header = () => {
  return (
    <div className="sticky top-0 z-10 max-w-md mx-auto  w-full bg-[#FFFF00]" style={{ height: '10vh' }}> 
    <h1 className='font-bold text-2xl absolute flex items-center z-10 space-x-4 top-4 left-4'>Ludo Supreme</h1>
      <div className="absolute top-4 right-4 flex items-center z-10 space-x-4"> 
        <button className="bg-[#7950F2] p-2 rounded-full">
          <img src={VideoInfoIcon} alt="Video info" className="h-6 w-6" /> 
        </button>
        <button className="bg-[#7950F2] text-white font-bold py-2 px-4 rounded-full flex items-center">
          {MONEY}
          <span className="bg-white text-[#7950F2] h-8 w-8 flex items-center justify-center ml-2 rounded-full">+</span>
        </button>
      </div>
    </div>
  );
};

export default Scrolled_Header;