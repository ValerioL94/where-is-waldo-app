import { useState } from 'react';
import { GameMap, Stage } from '../types';
import MapSelectionComponent from './MapSelectionComponent';
import LeaderboardComponent from './LeaderboardComponent';
import GameComponent from './GameComponent';

const MainComponent = () => {
  const [stage, setStage] = useState<Stage>(Stage.mapSelection);
  const [gameMap, setGameMap] = useState<GameMap | undefined>(undefined);

  return (
    <main className='bg-indigo-50'>
      {stage === Stage.mapSelection && (
        <MapSelectionComponent setGameMap={setGameMap} setStage={setStage} />
      )}
      {stage === Stage.gamePhase && (
        <GameComponent gameMap={gameMap!} setStage={setStage} />
      )}
      {stage === Stage.leaderboard && (
        <LeaderboardComponent setStage={setStage} />
      )}
    </main>
  );
};

export default MainComponent;
