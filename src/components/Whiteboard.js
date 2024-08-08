import React, { useState } from 'react';
import Point from './Point';
import { fitLine } from '../utils/fitLine';
import '../style.css';

function Whiteboard() {
  const [points, setPoints] = useState([]);
  const [lineFormula, setLineFormula] = useState('');

  const handleClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const newPoint = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    setPoints((prevPoints) => {
      const updatedPoints = [...prevPoints, newPoint];
      updateLineFormula(updatedPoints);
      return updatedPoints;
    });
  };

  const handleClear = () => {
    setPoints([]);
    setLineFormula('');
  };

  const handleDeleteLast = () => {
    setPoints((prevPoints) => {
      const updatedPoints = prevPoints.slice(0, -1);
      updateLineFormula(updatedPoints);
      return updatedPoints;
    });
  };

  const updateLineFormula = (points) => {
    if (points.length < 2) {
      setLineFormula('');
      return;
    }

    const fitLineResult = fitLine(points);
    if (!fitLineResult) {
      setLineFormula('Error calculating line');
      return;
    }

    const { x1, y1, x2, y2 } = fitLineResult[0];
    const m = (y2 - y1) / (x2 - x1);
    const intercept = y1 - m * x1;

    setLineFormula(`y = ${m.toFixed(2)}x + ${intercept.toFixed(2)}`);
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
      <div className="line-formula">
        <p>Current Line Formula:</p>
        <p>{lineFormula}</p>
      </div>
    </div>
  );
}

export default Whiteboard;
