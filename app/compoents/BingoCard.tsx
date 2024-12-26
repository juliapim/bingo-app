import { useContext } from "react";
import { GameContext } from "../context/GameContext";

const BingoCard: React.FC = () => {
  const gameContext = useContext(GameContext);
  if (!gameContext) throw new Error("GameContext is undefined");

  const { toggleCell, board } = gameContext;

  return (
    <div className=" grid grid-cols-5 gap-2 w-full max-w-6xl mx-auto">
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
        <div
            key={`${rowIndex}-${colIndex}`}
            className={`bg-black text-white border-3 border-teal-300 border p-4 text-center cursor-pointer w-full h-full flex items-center justify-center ${
            cell.marked && !cell.free ? "line-through text-gray-500" : "" // Exclude free cells from line-through
            } ${cell.free ? "bg-[#63f0d2] font-bold" : "bg-[#63f0d2]"}`} // Style for the FREE cell
            onClick={() => toggleCell(rowIndex, colIndex)}
            style={{ fontSize: "clamp(0.8rem, 2vw, 1.2rem)" }}>{cell.text}
        </div>

          
        ))
      )}
    </div>
  );
};

export default BingoCard;
