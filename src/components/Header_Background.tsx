
import Ludo from '../assets/Ludo_img.png';
import VideoInfoIcon from '../assets/icons8-next-50.png'
const HeaderBackground = () => {
  return (
    <div className="max-w-md mx-auto relative w-full bg-[#2C48AD]" style={{ height: '33vh' }}> 
      <img src={Ludo} alt="Ludo Background" className="w-full h-full object-contain" />
      <div className="absolute top-4 right-4 flex items-center z-10 space-x-4"> 
      <button className="bg-white p-2 rounded-full ">
        <img src={VideoInfoIcon} alt="Video info" className="h-6 w-6" /> 
      </button>
      <button className="bg-white text-[#7950F2] font-bold py-2 px-4 rounded-full flex items-center">
        ₹15
        <span className="bg-[#7950F2] text-white h-8 w-8 flex items-center justify-center ml-2 rounded-full">+</span>
      </button>
      </div>
    </div>
  );
};

export default HeaderBackground;