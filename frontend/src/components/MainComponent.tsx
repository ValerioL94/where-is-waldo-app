import { useState } from 'react';
import Timer from './TimerComponent';
import ModalPrompt from './ModalPrompt';

const MainComponent = () => {
  const [isFound, setIsFound] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const [modalPrompt, setModalPrompt] = useState(false);
  function checkColor() {
    if (isFound) {
      return 'max-h-36 max-w-28 border-4 rounded-md border-green-500';
    } else return 'max-h-36 max-w-28 border-4 rounded-md border-red-500';
  }
  function getCoords(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const coordX = e.clientX - rect.left;
    const coordY = e.clientY - rect.top;
    const newClick = { x: coordX, y: coordY };
    setClickPosition(newClick);
    setModalPrompt(true);
  }
  return (
    <div className='flex flex-col lg:flex-row bg-gray-100'>
      <div className='lg:w-3/4 relative'>
        <img
          className='cursor-crosshair'
          src='/assets/images/alien-life-waldo.jpg'
          alt='alien life'
          onClick={getCoords}
        />
        {modalPrompt && (
          <ModalPrompt
            showModal={setModalPrompt}
            x={clickPosition.x}
            y={clickPosition.y}
          />
        )}
      </div>
      <div className='lg:fixed lg:left-3/4 pl-10'>
        <div className='flex flex-col md:flex-row lg:flex-col items-center w-full py-4 gap-4'>
          <Timer />
          <div className='text-center'>
            <span>
              <strong>Robo-dog</strong>
            </span>
            <img
              className={checkColor()}
              src='/assets/icons/robo-dog.png'
              alt='robot dog'
            />
          </div>
          <div className='text-center'>
            <span>
              <strong>Alien dad</strong>
            </span>
            <img
              className={checkColor()}
              src='/assets/icons/alien-dad.png'
              alt='alien dad'
            />
          </div>
          <div className='text-center'>
            <span>
              <strong>Astronaut</strong>
            </span>
            <img
              className={checkColor()}
              src='/assets/icons/astronaut.png'
              alt='astronaut'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
