# Tic-tac-toe Game

A simple two-player tic-tac-toe game built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Two-player gameplay (X and O)
- Responsive design
- Turn tracking
- Win detection
- Draw detection
- Game reset functionality

## Tech Stack

- Next.js
- TypeScript
- React
- Tailwind CSS
- Yarn Berry

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- Yarn

### Installation

```bash
# Clone the repository
git clone https://your-repository-url.git
cd tiktaktoe

# Install dependencies
yarn install
```

### Development

```bash
# Run the development server
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

```bash
# Build for production
yarn build

# Start the production server
yarn start
```

## Deployment

This project is ready to be deployed on Vercel.

## Game Rules

1. The game is played on a 3x3 grid.
2. Players take turns placing their marks (X or O) on empty squares.
3. The first player to get 3 of their marks in a row (horizontally, vertically, or diagonally) wins.
4. If all 9 squares are filled and no player has 3 in a row, the game ends in a draw.
