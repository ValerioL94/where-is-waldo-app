import { useEffect, useState } from 'react';

const TimerComponent = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const seconds = Math.floor((time % 6000) / 100);
  const milliseconds = time % 100;
  useEffect(() => {
    let intervalId: number;
    if (isRunning && time === 5999) {
      setIsRunning(false);
    }
    if (isRunning) {
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);
  return (
    <div className='text-lg border-2 p-2 rounded-md border-indigo-900'>
      <strong>
        Time: {seconds.toString().padStart(2, '0')}:
        {milliseconds.toString().padStart(2, '0')}
      </strong>
    </div>
  );
};

export default TimerComponent;
