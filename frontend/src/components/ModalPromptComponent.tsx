import { Character } from '../types';

const ModalPromptComponent = ({
  characters,
  setCharacters,
  showModal,
  x,
  y,
}: {
  characters: Character[];
  setCharacters: React.Dispatch<React.SetStateAction<Character[]>>;
  showModal: React.Dispatch<React.SetStateAction<boolean>>;
  x: number;
  y: number;
}) => {
  function handleConfirm(id: number) {
    showModal(false);
    setCharacters(
      characters.map((character) => {
        if (character.id === id) {
          return { ...character, found: true };
        } else {
          return character;
        }
      })
    );
  }
  return (
    <div
      className='flex flex-col gap-2 items-center justify-center absolute min-w-28 h-40  bg-indigo-400 border-indigo-900 border-2 rounded-md p-2 w-32'
      style={{
        left: x > window.innerWidth / 2 ? x - 150 : x + 25,
        top: y - 25,
      }}
    >
      <button
        className='absolute -top-2 right-2 bg-white rounded-full -mr-4 p-1 leading-[0.6] border-2 border-indigo-900 font-bold'
        onClick={() => showModal(false)}
      >
        x
      </button>
      {characters.map(
        (character) =>
          !character.found && (
            <button
              key={character.id}
              className='w-24 border-indigo-900 border-2 rounded-md hover:bg-indigo-900 hover:text-white p-1 font-bold'
              onClick={() => handleConfirm(character.id)}
            >
              {character.name}
            </button>
          )
      )}
    </div>
  );
};

export default ModalPromptComponent;
