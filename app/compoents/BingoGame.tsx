"use client";

import { useState, useEffect } from "react";
import { GameContextProvider } from "../context/GameContext";
import BingoCard from "./BingoCard";
import { shuffleArray, phrases, Cell } from "../utils/gameUtils";

const BingoGame: React.FC = () => {
  const [board, setBoard] = useState<Cell[][]>([]);
  const [bingoMessage, setBingoMessage] = useState<string | null>(null);
  const [animationVisible, setAnimationVisible] = useState(false); // Tracks animation visibility
  const [gameStarted, setGameStarted] = useState(false); // Tracks if the game has started

  const initializeBoard = () => {
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
    setGameStarted(false); // Reset game state
  };

  useEffect(() => {
    initializeBoard();
  }, []);

  useEffect(() => {
    if (!gameStarted) return; // Avoid checking Bingo if the game hasn't started

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
        setAnimationVisible(true); // Show animation
        setBingoMessage("Bingo!");
        setTimeout(() => {
          setAnimationVisible(false); // Hide animation after 5 seconds
          setBingoMessage(null);
          initializeBoard(); // Restart the game
        }, 3000);
      }
    };

    checkBingo();
  }, [board, gameStarted]);

  const toggleCell = (rowIndex: number, colIndex: number) => {
    setGameStarted(true); // Mark the game as started when a cell is toggled
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
      <div className="bg-black flex flex-col items-center min-h-screen font-monoLisaRegular relative">
        <h1 className="text-4xl font-bold mt-8 mb-8 text-center leading-normal text-white">Sensory Bingo Connect!</h1>
        <div className="w-full max-w-6xl px-4 relative">
          {animationVisible && bingoMessage && (
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="p-8 bg-[#f0006d] text-[#f0006d] rounded animate-bounce">
                <h1 className="text-6xl font-bold text-black animate-pulse">{bingoMessage}</h1>
              </div>
            </div>
          )}
          <BingoCard
            cellClass={(cell) =>
              cell.free
                ? "bg-[#80ecdc] text-black border-2 border-teal-300"
                : "bg-black text-white border-2 border-teal-300"
            }
          />
        </div>
      </div>
    </GameContextProvider>
  );
};

export default BingoGame;
