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
   - Compute the average of the x-coordinates x_c and the average of the y-coordinates y_c of all points:

    ```math
    x_c = \frac{1}{n} \sum_{i=1}^{n} x_i
    ```

    ```math
    y_c = \frac{1}{n} \sum_{i=1}^{n} y_i
    ```

2. **Calculate Individual Slopes**:
   - For each point, compute the slope \(m_i\) based on the average position:

    ```math
    m_i = \frac{y_c - y_i}{x_c - x_i}
    ```
     where x_i and y_i are the coordinates of the i-th point.

3. **Average Slope**:
   - Calculate the average slope m from the individual slopes:

    ```math
    m = \frac{1}{n} \sum_{i=1}^{n} m_i
    ```

4. **Calculate Line Endpoints**:
   - Determine the coordinates for the start and end of the line based on the canvas width and the average slope:
     - For the left side of the canvas:

    ```math
    x_1 = 0
    ```

    ```math
    y_1 = m \cdot (x_1 - x_c) + y_c
    ```
     - For the right side of the canvas: 

    ```math
    x_2 = window.innerWidth
    ```

    ```math
    y_2 = m \cdot (x_2 - x_c) + y_c
    ```


## Note

The mathematical approach used in this project for line fitting is a custom method developed for this specific application. Interestingly, this approach yields results that are equivalent to those produced by the least squares regression method, which is commonly used to determine the best-fitting line by minimizing the overall error between the line and all data points. Therefore, while this method is designed to fit lines dynamically based on user interaction, it effectively aligns with the principles of regression analysis.

