import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const useRecord = (initialColor = '#FF0000') => {
  const [current, setCurrent] = useState(initialColor);
  const [history, setHistory] = useState([]);  

  const record = (value) => {
    setCurrent(value);
  };

  useEffect(() => {
    setHistory((prevHistory) => [...prevHistory, current]);
  }, [current]);

  const undo = (index) => {
    setCurrent(history[index - 1]);
  };
  const redo = (index) => {
    setCurrent(history[index + 1]);
  };

  return { current, undo, redo, record, history };

};
