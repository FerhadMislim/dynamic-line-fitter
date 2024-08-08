import React from 'react';

function Point({ x, y }) {
  return (
    <div
      className="point"
      style={{
        position: 'absolute',
        left: x - 5,
        top: y - 5,
        width: 10,
        height: 10,
        borderRadius: '50%',
      }}
    ></div>
  );
}

export default Point;
