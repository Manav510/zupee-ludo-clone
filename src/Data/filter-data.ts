interface Game {
    players: number;
    winners: number;
    gameType: boolean;
    details: string;
    prize: number;
    timeLeft: number;
    entryFee: number;
    participants: number;
    ranks: number[];
  }
  
  interface Tab {
    id: string;
    label: string;
    filter: (game: Game) => boolean;
    type: 'Tournament Format' | 'Entry Amount' | 'Tournament Type' | 'All';
  }
  
  const tabs: Tab[] = [
    { id: 'all', label: 'All', filter: (game: Game) => true,type: 'All'},
    { id: 'quick', label: 'QUICK', filter: (game: Game) => game.gameType === true,type: 'Tournament Type'},
    { id: 'regular', label: 'Regular', filter: (game: Game) => game.gameType === false,type: 'Tournament Type'},
    { id: 'twoPlayers', label: '2 Players - 1 Winner', filter: (game: Game) => game.players === 2 && game.winners === 1,type: 'Tournament Format'},
    { id: 'threePlayers', label: '3 Players - 1 Winner', filter: (game: Game) => game.players === 3 && game.winners === 1,type: 'Tournament Format' },
    { id: 'fourPlayers', label: '4 Players - 1 Winner', filter: (game: Game) => game.players === 4 && game.winners === 1,type: 'Tournament Format' },
    { id: 'fourPlayerstwowinners', label: '4 Players - 2 Winners', filter: (game: Game) => game.players === 4 && game.winners === 2,type: 'Tournament Format' },
    { id: '0-10', label: '₹0 - ₹10', filter: (game: Game) => game.entryFee >= 0 && game.entryFee <= 10, type: 'Entry Amount'},
    { id: '10-75', label: '₹10 - ₹75', filter: (game: Game) => game.entryFee >= 10 && game.entryFee <= 75, type: 'Entry Amount'},
    { id: '75-200', label: '₹75 - ₹200', filter: (game: Game) => game.entryFee >= 75 && game.entryFee <= 200, type: 'Entry Amount'},
    { id: '200-1000', label: '₹200 - ₹1000', filter: (game: Game) => game.entryFee >= 200 && game.entryFee <= 1000, type: 'Entry Amount'},

  ];
  
  export default tabs;