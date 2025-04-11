import React from 'react';

interface SquareProps {
  value: string | null;
  onClick: () => void;
  isWinning: boolean;
}

const Square: React.FC<SquareProps> = ({ value, onClick, isWinning }) => {
  return (
    <button
      className={`flex items-center justify-center h-16 w-16 md:h-24 md:w-24 text-3xl md:text-5xl font-bold border border-gray-400 bg-white hover:bg-gray-100 focus:outline-none transition-colors ${
        isWinning ? 'bg-green-100' : ''
      }`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
