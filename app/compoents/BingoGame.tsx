"use client";

import { useState, useEffect } from "react";
import { GameContextProvider } from "../context/GameContext";
import BingoCard from "./BingoCard";
import { shuffleArray, phrases, Cell } from "../utils/gameUtils";

const BingoGame: React.FC = () => {
  const [board, setBoard] = useState<Cell[][]>([]);
  const [bingoMessage, setBingoMessage] = useState<string | null>(null);

  useEffect(() => {
    const shuffledPhrases = shuffleArray([...phrases, ...phrases]); // Duplicate phrases to ensure enough for the grid
    const newBoard = Array(5)
      .fill(null)
      .map((_, rowIndex) =>
        Array(5)
          .fill(null)
          .map((_, colIndex) => ({
            text:
              rowIndex === 2 && colIndex === 2
                ? "FREE"
                : shuffledPhrases[rowIndex * 5 + colIndex],
            marked: rowIndex === 2 && colIndex === 2,
            free: rowIndex === 2 && colIndex === 2,
          }))
      );
    setBoard(newBoard);
  }, []);

  useEffect(() => {
    const checkBingo = () => {
      const isWinningRow = (row: Cell[]) => row.every((cell) => cell.marked);
      const isWinningCol = (colIndex: number) => board.every((row) => row[colIndex].marked);
      const isWinningDiagonal = () =>
        board.every((row, i) => row[i].marked) ||
        board.every((row, i) => row[4 - i].marked);

      const hasBingo =
        board.some(isWinningRow) ||
        [0, 1, 2, 3, 4].some(isWinningCol) ||
        isWinningDiagonal();

      if (hasBingo) {
        setBingoMessage("Bingo!");
      } else {
        setBingoMessage(null);
      }
    };

    checkBingo();
  }, [board]);

  const toggleCell = (rowIndex: number, colIndex: number) => {
    setBoard((prevBoard) => {
      const newBoard = prevBoard.map((row, rIdx) =>
        row.map((cell, cIdx) =>
          rIdx === rowIndex && cIdx === colIndex
            ? { ...cell, marked: !cell.marked }
            : cell
        )
      );
      return newBoard;
    });
  };

  return (
    <GameContextProvider value={{ board, toggleCell }}>
      <div className="bg-black flex flex-col items-center justify-center min-h-screen font-monoLisaRegular">
        <h1 className="text-4xl text-center leading-snug font-bold mb-8 mt-8 text-white">Enjoy our Sensory Virtual Bingo!</h1>
        <div className="w-full max-w-6xl px-4"> {/* Increased width for Bingo */}
          <BingoCard />
        </div>
        {bingoMessage && (
          <div className="mt-4 p-4 bg-[#f0006d] rounded absolute  animate-bounce">
            <h1 className="text-6xl font-bold text-black animate-pulse">{bingoMessage}</h1>
          </div>
        )}
      </div>
    </GameContextProvider>
  );
};

export default BingoGame;
