import { GameMap, Stage } from './types';
import { gameMaps } from '../db';

const MapSelectionComponent = ({
  setGameMap,
  setStage,
}: {
  setGameMap: React.Dispatch<React.SetStateAction<GameMap | undefined>>;
  setStage: React.Dispatch<React.SetStateAction<Stage>>;
}) => {
  return (
    <div className='flex flex-col items-center justify-center m-4 gap-4'>
      <h2 className='text-xl font-bold p-2'>Select a map</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {gameMaps.map((gameMap, index) => (
          <div
            key={index}
            tabIndex={0}
            className='flex flex-col gap-2 max-w-96 font-bold border-indigo-900 text-indigo-900 items-center hover:cursor-pointer hover:border-indigo-900 focus:border-indigo-900 border-2 rounded-md shadow-lg shadow-slate-300 hover:shadow-indigo-900 focus:shadow-indigo-900 outline-none transition-transform hover:scale-105 focus:scale-105'
            onClick={() => {
              setGameMap(gameMap);
              setStage(Stage.gamePhase);
            }}
          >
            <img
              className='h-full rounded-t-md border-b-2 border-indigo-900'
              src={gameMap.image.src}
              alt={gameMap.image.alt}
            />
            <p className='h-8'>
              {gameMap.name} - {gameMap.difficulty}
            </p>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          setStage(Stage.leaderboard);
        }}
        className='mt-8 border-2 p-2 rounded-md border-indigo-900 bg-indigo-400 font-bold text-black hover:bg-indigo-900 hover:border-indigo-900 hover:text-white focus:bg-indigo-900 focus:border-indigo-900 focus:text-white outline-none transition-transform hover:scale-110 focus:scale-110'
      >
        Go to leaderboard
      </button>
    </div>
  );
};

export default MapSelectionComponent;
