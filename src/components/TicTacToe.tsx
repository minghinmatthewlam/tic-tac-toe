'use client';

import React from 'react';
import { useState } from 'react';
import Square from './Square';

type Player = 'X' | 'O' | null;
interface WinnerInfo {
  player: Player;
  line: number[] | null;
}

const TicTacToe: React.FC = () => {
  const [squares, setSquares] = useState<Player[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState<boolean>(true);
  
  const handleClick = (i: number) => {
    // If square is already filled or there's a winner, return early
    if (squares[i] || calculateWinner(squares).player) return;
    
    const newSquares = squares.slice();
    newSquares[i] = isXNext ? 'X' : 'O';
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };
  
  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  };
  
  const winnerInfo = calculateWinner(squares);
  const isDraw = !winnerInfo.player && squares.every((square: Player) => square !== null);
  
  let status: string;
  if (winnerInfo.player) {
    status = `Winner: ${winnerInfo.player}`;
  } else if (isDraw) {
    status = 'Game ended in a draw!';
  } else {
    status = `Next player: ${isXNext ? 'X' : 'O'}`;
  }
  
  return (
    <div className="flex flex-col items-center">
      <div className="text-xl font-semibold mb-4">{status}</div>
      <div className="grid grid-cols-3 gap-1 mb-6 relative">
        {squares.map((value: Player, i: number) => (
          <Square 
            key={i} 
            value={value} 
            onClick={() => handleClick(i)}
            isWinning={winnerInfo.line?.includes(i) || false}
          />
        ))}
        {winnerInfo.line && (
          <div className={`absolute pointer-events-none transition-all duration-300 ${
            // Top row
            winnerInfo.line[0] === 0 && winnerInfo.line[1] === 1 && winnerInfo.line[2] === 2 ? 'top-[16.67%] -translate-y-1/2 left-0 right-0 h-1 bg-green-500' :
            // Middle row
            winnerInfo.line[0] === 3 && winnerInfo.line[1] === 4 && winnerInfo.line[2] === 5 ? 'top-1/2 -translate-y-1/2 left-0 right-0 h-1 bg-green-500' :
            // Bottom row
            winnerInfo.line[0] === 6 && winnerInfo.line[1] === 7 && winnerInfo.line[2] === 8 ? 'top-[83.33%] -translate-y-1/2 left-0 right-0 h-1 bg-green-500' :
            // Left column
            winnerInfo.line[0] === 0 && winnerInfo.line[1] === 3 && winnerInfo.line[2] === 6 ? 'left-[16.67%] -translate-x-1/2 top-0 bottom-0 w-1 bg-green-500' :
            // Middle column
            winnerInfo.line[0] === 1 && winnerInfo.line[1] === 4 && winnerInfo.line[2] === 7 ? 'left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-green-500' :
            // Right column
            winnerInfo.line[0] === 2 && winnerInfo.line[1] === 5 && winnerInfo.line[2] === 8 ? 'left-[83.33%] -translate-x-1/2 top-0 bottom-0 w-1 bg-green-500' :
            // Diagonal top-left to bottom-right
            winnerInfo.line[0] === 0 && winnerInfo.line[1] === 4 && winnerInfo.line[2] === 8 ? 'rotate-45 top-1/2 left-0 right-0 h-1 bg-green-500' :
            // Diagonal top-right to bottom-left
            'rotate-[-45deg] top-1/2 left-0 right-0 h-1 bg-green-500'
          }`} />
        )}
      </div>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        onClick={resetGame}
      >
        Reset Game
      </button>
    </div>
  );
};

function calculateWinner(squares: Player[]): WinnerInfo {
  const lines = [
    [0, 1, 2], // top row
    [3, 4, 5], // middle row
    [6, 7, 8], // bottom row
    [0, 3, 6], // left column
    [1, 4, 7], // middle column
    [2, 5, 8], // right column
    [0, 4, 8], // diagonal \
    [2, 4, 6], // diagonal /
  ];
  
  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { player: squares[a], line: [a, b, c] };
    }
  }
  
  return { player: null, line: null };
}

export default TicTacToe;
