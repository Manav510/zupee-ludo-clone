import { useState } from 'react';
import Timer from './Timer';

import mul_people from "../assets/icons8-people-50.png"
import quick_icon from "../assets/icons8-quick-mode-on-80.png"
const Game_Card = ({
    participants,
    players,
    winners,
    prize,
    timeLeft,
    entryFee,
    gameType,
    details,
    ranks
}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden mb-0">
            <div className="flex justify-between bg-gray-300 px-4 py-2">
                <span className="flex-initial">
                <img src={mul_people} alt="Multiple People" className="inline-block h-6 w-6 mr-2" />
                {participants}+</span>
                <span className="flex-grow text-center font-bold">{players} PLAYERS | {winners} WINNERS</span>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 mb-4">
                <div className="flex justify-between items-baseline px-6">
                    <div className="text-gray-600 text-sm">PRIZE</div>
                    {gameType && <div className='font-bold'>
                    <img src={quick_icon} alt="Quick Icon" className="inline-block h-6 w-6 mr-2" />
                        QUICK</div>}
                    <div className="text-gray-600 text-sm">ENTRY</div>
                </div>
                <div className="flex justify-between items-end">
                    <button type="button" className="text-xl font-bold text-gray-800 bg-gray-300 rounded-full px-6 py-2" onClick={() => setIsExpanded(!isExpanded)}>
                        ₹{prize}
                        <span className="text-gray-600">{isExpanded ? '▲' : '▼'}</span>
                    </button>
                    <span className='text-xs bg-gray-300 rounded-full px-6 py-2'><Timer duration={timeLeft * 1000 * 60} /></span>
                    <button type="button" className="bg-yellow-300 text-purple-700 rounded-full px-6 py-2">
                        ₹{entryFee}
                    </button>
                </div>
                {isExpanded && (
                    <div className="text-xs text-gray-500 mt-2 text-center">
                        <hr className="my-2 border-dashed border-gray-300 mx-auto w-full" />
                        <div className="flex flex-wrap justify-center">
                            {ranks.map((rank, index) => (
                                <div key={index} className="w-1/2">
                                    <span>Rank {index + 1}: ₹{rank.toFixed(1)}</span>
                                </div>
                            ))}
                        </div>
                        <hr className="my-2 border-dotted border-gray-300 mx-auto w-full" />
                        <span>{details}</span>
                        <hr className="my-2 border-dotted border-gray-300 mx-auto w-full" />
                        <span className='text-purple-700'>TERMS & CONDITIONS</span>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Game_Card;
