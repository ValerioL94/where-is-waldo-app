const ModalPrompt = ({
  showModal,
  x,
  y,
}: {
  showModal: React.Dispatch<React.SetStateAction<boolean>>;
  x: number;
  y: number;
}) => {
  return (
    <div
      className='flex flex-col gap-2 items-center justify-center absolute min-w-28 h-40  bg-slate-400 border-indigo-900 border-2 rounded-md p-1 pt-4'
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
      <button
        className='w-full border-slate-300 border-2 rounded-md hover:bg-slate-300 p-1 font-bold'
        onClick={() => showModal(false)}
      >
        Robo-dog
      </button>
      <button
        className='w-full border-slate-300 border-2 rounded-md hover:bg-slate-300 p-1 font-bold'
        onClick={() => showModal(false)}
      >
        Alien dad
      </button>
      <button
        className='w-full border-slate-300 border-2 rounded-md hover:bg-slate-300 p-1 font-bold'
        onClick={() => showModal(false)}
      >
        Astronaut
      </button>
    </div>
  );
};

export default ModalPrompt;
