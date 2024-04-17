export interface Game {
  participants: number;
  players: number;
  winners: number;
  prize: number;
  timeLeft: number;
  entryFee: number;
  gameType: boolean;
  details: string;
  ranks: number[];
}

export const gamesData: Game[];