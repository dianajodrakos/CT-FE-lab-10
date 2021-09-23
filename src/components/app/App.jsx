/* eslint-disable max-len */
import React from 'react';
import { useRecord } from '../../hooks/useRecord';

function App() {
  const { current, undo, redo, record, history } = useRecord('#FF0000');

  console.log(current, 'CURRENT', history, 'HISTORY');

  return (
    <>
      <button onClick={undo}>undo</button>
      <button onClick={redo}>redo</button>
      <input type="color" value={current} onChange={({ target }) => record(target.value)} />
      <div role="display" style={{ backgroundColor: current, width: '10rem', height: '10rem' }}></div>
    </>
  );
}

export default App;
