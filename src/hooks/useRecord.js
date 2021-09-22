import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const useRecord = (initialColor = '#FF0000') => {
  const [current, useCurrent] = useState(initialColor);
  const [record, useRecord] = useState();

  const undo = () => {};
  const redo = () => {};

  useEffect(() => {}, []);

  return { current, undo, redo, record };

};
