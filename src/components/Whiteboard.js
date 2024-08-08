import React, { useState } from 'react';
import Point from './Point';
import { fitLine } from '../utils/fitLine';
import '../style.css';

function Whiteboard() {
  const [points, setPoints] = useState([]);

  const handleClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const newPoint = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    setPoints([...points, newPoint]);
  };

  const handleClear = () => {
    setPoints([]);
  };

  const handleDeleteLast = () => {
    setPoints(points.slice(0, -1));
  };

  const lines = fitLine(points);

  return (
    <div className="whiteboard-container">
      <div className="controls">
        <button onClick={handleClear}>Clear Board</button>
        <button onClick={handleDeleteLast}>Delete Last Point</button>
      </div>
      <div className="whiteboard" onClick={handleClick}>
        {points.map((point, index) => (
          <Point key={index} x={point.x} y={point.y} />
        ))}
        <svg className="lines">
          {lines.map((line, index) => (
            <line
              key={index}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="#2C59BA"
              strokeWidth="3"
            />
          ))}
        </svg>
      </div>
    </div>
  );
}

export default Whiteboard;
