import { useEffect, useRef, useState } from 'react';

interface Props {
  timeout: number;
}

function useTimeout(callback: Function = () => {}, { timeout = 0 }: Props) {
  const instanceTimer = useRef<any>(null);
  const startTime = useRef<any>(Date.now()).current;
  const remaining = useRef(timeout);
  const [pausing, setPausing] = useState(false);

  const pause = () => {
    clearTimeout(instanceTimer.current);

    const pauseTime = Date.now();
    const timeRemaining = timeout - (pauseTime - startTime);

    remaining.current = timeRemaining;
    setPausing(true);
  };

  const resume = () => {
    if (!pausing) {
      if (instanceTimer.current) clearTimeout(instanceTimer.current);

      let timer = setTimeout(callback, remaining.current || 0);

      instanceTimer.current = timer;
      setPausing(false);
    }
  };

  useEffect(() => {
    resume();
  }, []);

  console.log(remaining);

  return { pause, resume, pausing };
}

export default useTimeout;
