/* eslint-disable max-len */
import { useState } from 'react';

export const useRecord = (initialColor = '#FF0000') => {
  const [current, setCurrent] = useState(initialColor);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [history, setHistory] = useState([initialColor]);

  const record = (value) => {
    const index = currentIndex + 1;
    const historyArray = history.slice();
    historyArray.splice(index, 0, value);
    setCurrentIndex(index);
    setCurrent(value);
    setHistory(historyArray);
  };
  
  const undo = () => {
    if(currentIndex > 0) {
      const target = history[currentIndex - 1];
      setCurrent(target);
      setCurrentIndex(currentIndex - 1);
    }
  };
  
  const redo = () => {
    const historyArray = history.slice();
    if(currentIndex < (historyArray.length - 1)) {
      const target = history[currentIndex + 1];
      setCurrent(target);
      setCurrentIndex(currentIndex + 1);
    }
  };

  return { current, undo, redo, record };
};
