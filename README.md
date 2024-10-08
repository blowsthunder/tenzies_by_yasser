# Tenzies Game - Built with React.js

This is a **Tenzies Game** built using **React.js**. Tenzies is a fun dice game where the goal is to roll dice until all of them display the same value.

## Features

- **Single-player Mode:** Play against yourself and try to match all dice to the same number.
- **Interactive UI:** Built with React to ensure a smooth and engaging experience.
- **Roll and Hold:** Players can roll the dice and choose which ones to keep by clicking on them.
- **Winning State:** Once all dice show the same number, the game displays a winning message.
- **Roll Count:** Count how many rolls you took to win.

## Tech Stack

- **Framework:** React.js
- **Styling:** Basic CSS for UI layout and design

## How to Play

1. Roll all 10 dice.
2. Click on individual dice to freeze them at their current value.
3. Continue rolling the rest until all dice display the same number.
4. Celebrate when you match all dice with the same value!

## Installation and Setup

To run this game locally on your machine, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/YasserAbdechafik/tenzies-game.git
2. Navigate to the project directory:
3. Install the dependencies:
   ```bash
   npm install
4. Run the development server:
   ```bash
   npm start

## Gameplay Logic

React State: The game uses React's useState hook to track the state of each die and whether it's frozen.
Conditional Rendering: Dice can be toggled between "frozen" and "active" states, affecting how they behave during rolls.
Winning Condition: The game checks if all dice have the same value and declares the player as a winner when this condition is met.

## Contact
For any inquiries or suggestions, feel free to reach out:

Email: yasser.abdechafik@gmail.com
LinkedIn: https://www.linkedin.com/in/abdechafik-yasser-72a87623b/

