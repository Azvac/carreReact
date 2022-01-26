import React from 'react';
import { SquareItem } from './SquareItem';

const squares: Square[] = [
  {
    color: 'red',
  },
  {
    color: 'blue',
  },
  {
    color: 'green',
  },
];

function App() {
  return (
    <div>
      <SquareItem square={squares[0]} />
      <SquareItem square={squares[1]} />
      <SquareItem square={squares[2]} />
    </div>
  );
}

export default App;