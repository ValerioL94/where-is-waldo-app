import { useState } from 'react';
import { Character, GameMap, Stage } from './types';
import ModalPromptComponent from './ModalPromptComponent';
import TimerComponent from './TimerComponent';

const GameComponent = ({
  gameMap,
  setStage,
}: {
  gameMap: GameMap;
  setStage: React.Dispatch<React.SetStateAction<Stage>>;
}) => {
  const [characters, setCharacters] = useState<Character[]>(gameMap.characters);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const [modalPrompt, setModalPrompt] = useState(false);
  function getCoords(e: React.MouseEvent) {
    const rect = e.currentTarget.getBoundingClientRect();
    setClickPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setModalPrompt(true);
  }
  return (
    <div className='flex flex-col lg:flex-row bg-gray-100'>
      <div className='lg:w-3/4 relative'>
        <img
          className='cursor-crosshair border-b-2 lg:border-r-2 lg:border-b-0 border-indigo-900'
          src={gameMap.image.src}
          alt={gameMap.image.alt}
          onClick={getCoords}
        />
        {modalPrompt && (
          <ModalPromptComponent
            characters={characters}
            setCharacters={setCharacters}
            showModal={setModalPrompt}
            x={clickPosition.x}
            y={clickPosition.y}
          />
        )}
      </div>
      <div className='lg:fixed lg:left-3/4 pl-10'>
        <div className='flex flex-col md:flex-row lg:flex-col items-center w-full py-4 gap-4'>
          <TimerComponent />
          {characters.map((character) => (
            <div key={character.id} className='text-center'>
              <span>
                <strong>{character.name}</strong>
              </span>
              <img
                src={character.icon.src}
                alt={character.icon.alt}
                className={
                  character.found
                    ? 'max-h-36 max-w-28 border-4 rounded-md border-green-500'
                    : 'max-h-36 max-w-28 border-4 rounded-md border-red-500'
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameComponent;
