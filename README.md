# Dynamic Line Fitter

## Overview

The Dynamic Line Fitter application allows users to interactively add points on a blank canvas. As points are added, a line is dynamically fitted through all points based on their average position and slope. The application also includes controls to clear the board or delete the last point added.

## Features

- **Add Points**: Click on the canvas to add points.
- **Dynamic Line Fitting**: A line is automatically adjusted to fit all points based on their average position and slope.
- **Clear Board**: Button to remove all points and reset the canvas.
- **Delete Last Point**: Button to remove the most recently added point.

## How It Works

### Mathematical Formula for Line Fitting

1. **Calculate Averages**:
   - Compute the average of the x-coordinates (\(x_c\)) and the average of the y-coordinates (\(y_c\)) of all points:
     $$
     x_c = \frac{1}{n} \sum_{i=1}^{n} x_i
     $$
     $$
     y_c = \frac{1}{n} \sum_{i=1}^{n} y_i
     $$
     where \(n\) is the number of points, \(x_i\) and \(y_i\) are the x and y coordinates of the \(i\)-th point.

2. **Calculate Individual Slopes**:
   - For each point, compute the slope \(m_i\) based on the average position:
     $$
     m_i = \frac{y_c - y_i}{x_c - x_i}
     $$
     where \(x_i\) and \(y_i\) are the coordinates of the \(i\)-th point.

3. **Average Slope**:
   - Calculate the average slope \(m\) from the individual slopes:
     $$
     m = \frac{1}{n} \sum_{i=1}^{n} m_i
     $$

4. **Calculate Line Endpoints**:
   - Determine the coordinates for the start and end of the line based on the canvas width and the average slope:
     - For the left side of the canvas (\(x_1 = 0\)):
       $$
       y_1 = m \cdot (x_1 - x_c) + y_c
       $$
     - For the right side of the canvas (\(x_2 = \text{window.innerWidth}\)):
       $$
       y_2 = m \cdot (x_2 - x_c) + y_c
       $$


