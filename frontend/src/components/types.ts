export enum Stage {
  mapSelection,
  gamePhase,
  leaderboard,
}
export interface Character {
  id: number;
  name: string;
  icon: {
    src: string;
    alt: string;
  };
  found: boolean;
  position: { x: number; y: number };
}
export interface GameMap {
  id: number;
  name: string;
  image: {
    src: string;
    alt: string;
  };
  characters: Character[];
  scoreboard: Player[];
}

export interface Player {
  name: string;
  score: string;
}
