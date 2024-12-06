# Speed Check Program

This program evaluates a driver's speed and determines the number of **demerit points** based on the speed limit. It also determines if the driver's license should be **suspended** due to accumulated points.

The main logic works as follows:

1. If the speed is within the limit, it returns `"Ok"`.
2. If the speed exceeds the limit, it calculates the demerit points based on how much the speed exceeds the limit.
3. If the demerit points exceed 12, the license is suspended.
4. If the demerit points are less than or equal to 12, it returns the number of points.

### Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Function Details](#function-details)
4. [Example](#example)
5. [License](#license)

## Installation

To use the **Speed Check Program**, simply copy the JavaScript code into your project. Ensure you have a JavaScript runtime environment, such as a browser console or Node.js.

```bash
git clone https://github.com/Angela-G9/speed-check-program.git

