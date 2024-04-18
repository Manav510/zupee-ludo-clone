import Game_Card from './Game_Card'
import { useSelector } from 'react-redux';
import { selectFilteredGames } from '../store/selector';
const Game_List = () => {
        const maxHeightClass = "max-h-[calc(100vh-0rem)]";  
    const filteredAndSortedGamesData = useSelector(selectFilteredGames);  
    
    
    return (
        <div className={`overflow-y-auto ${maxHeightClass} overflow-y-auto`}>
        {filteredAndSortedGamesData.map((game, index) => (
                <Game_Card key={index} {...game} />
            ))
            }
         
        </div>
  )
}

export default Game_List
