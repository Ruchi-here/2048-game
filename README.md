# 2048 Game Simulation

This project simulates the popular puzzle game 2048. The game is implemented using HTML, CSS, and JavaScript, allowing users to play and interact with the game in a web browser.

## Getting Started

To run the 2048 game simulation, follow these steps:

1. Clone the repository or download the source code files.

2. Open the `2048.html` file in a web browser.

3. The game board will be displayed, and you can start playing by using the arrow keys to move the tiles on the board.

## How the Game Works

The 2048 game is played on a 4x4 grid, where the objective is to combine tiles with the same numbers to reach the 2048 tile. Each tile represents a power of 2, starting from 2.

The game simulation includes the following features:

- **Game Initialization**: Upon loading the page, the game board is initialized with an empty grid and two tiles with the value 2.

- **Tile Movement**: The player can use the arrow keys (up, down, left, right) to move the tiles on the board. When two tiles with the same number collide, they merge into a single tile with their sum.

- **Score Tracking**: The score is displayed on the screen and updated whenever tiles are merged.

- **Random Tile Generation**: After each move, a new tile with a value of 2 is randomly generated and placed on an empty space on the board.

- **Game Over**: The game ends when there are no more empty spaces on the board and no adjacent tiles can be merged. At this point, the player can restart the game.

![ezgif-1-18e999f693](https://github.com/Ruchi-here/2048-game/assets/122676573/ba592d88-6d2f-440a-9d25-68e20269ed4e)


## Code Structure

The code for the 2048 game simulation is organized into the following files:

- `2048.html`: The main HTML file that defines the structure of the game board and includes the necessary CSS and JavaScript files.

- `2048.css`: The CSS file that styles the game board and tiles.

- `2048.js`: The JavaScript file that contains the game logic and functionality, including initializing the game, handling tile movements, generating new tiles, and updating the score.


## Acknowledgments

This project is based on the original 2048 game by Gabriele Cirulli.
