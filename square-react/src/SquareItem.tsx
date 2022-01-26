import React from 'react';

interface Props {
  square: Square;
}

export const SquareItem: React.FC<Props> = ({ square }) => {
  return (
      <div style={{
        backgroundColor: square.color,
        width: 50,
        height: 0,
        paddingTop: 50,
        margin: 25
      }}></div>
  );
};