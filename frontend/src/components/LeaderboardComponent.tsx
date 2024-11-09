import { gameMaps } from '../db';
import { Stage } from './types';

const LeaderboardComponent = ({
  setStage,
}: {
  setStage: React.Dispatch<React.SetStateAction<Stage>>;
}) => {
  return (
    <div className='flex flex-col items-center justify-center m-4 gap-4'>
      <h2 className='p-2 font-bold text-xl'>Leaderboard</h2>
      <div className='flex gap-4 flex-wrap justify-center'>
        {gameMaps.map((gameMap, index) => (
          <div
            key={index}
            className='border-indigo-900 border-2 min-w-60 rounded-lg'
          >
            <h1 className='border-indigo-900 border-b-2 p-2 text-lg font-bold text-indigo-900 text-center'>
              {gameMap.name}
            </h1>
            {!gameMap.scoreboard.length && (
              <p className='text-center p-4'>No scores yet.</p>
            )}
            {gameMap.scoreboard && (
              <ol className='list-decimal list-inside'>
                {gameMap.scoreboard.map((player, index) => (
                  <li key={index} className='p-2 border-b-2 m-2'>
                    {player.name} - {player.score}
                  </li>
                ))}
              </ol>
            )}
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          setStage(Stage.mapSelection);
        }}
        className='mt-8 border-2 p-2 rounded-md border-indigo-900 bg-indigo-400 font-bold text-black hover:bg-indigo-900 hover:border-indigo-900 hover:text-white focus:bg-indigo-900 focus:border-indigo-900 focus:text-white outline-none transition-transform hover:scale-110 focus:scale-110'
      >
        Go to map selection
      </button>
    </div>
  );
};

export default LeaderboardComponent;
