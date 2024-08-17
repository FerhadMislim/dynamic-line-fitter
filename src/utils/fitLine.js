export function fitLine(points) {
  if (points.length < 2) return [];

  const xAvg = points.reduce((sum, point) => sum + point.x, 0) / points.length;
  const yAvg = points.reduce((sum, point) => sum + point.y, 0) / points.length;

  const slopes = points.map(point => (yAvg - point.y) / (xAvg - point.x));
  const avgSlope = slopes.reduce((sum, slope) => sum + slope, 0) / slopes.length;

  const x1 = 0; // Starting point for the line (left side of the canvas)
  const y1 = avgSlope * (x1 - xAvg) + yAvg;

  const x2 = window.innerWidth; // Ending point for the line (right side of the canvas)
  const y2 = avgSlope * (x2 - xAvg) + yAvg;

  return { x1, y1, x2, y2 };
}
