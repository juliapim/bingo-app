import { useContext } from "react";
import { GameContext } from "../context/GameContext";
import { Cell } from "../utils/gameUtils";

interface BingoCardProps {
  cellClass?: (cell: Cell) => string; // Optional prop for dynamic cell styling
}

const BingoCard: React.FC<BingoCardProps> = ({ cellClass }) => {
  const gameContext = useContext(GameContext);
  if (!gameContext) throw new Error("GameContext is undefined");

  const { toggleCell, board } = gameContext;

  return (
    <div className="grid grid-cols-5 gap-2 w-full max-w-6xl mx-auto">
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            className={`bg-black text-white border-3 border-teal-300 border p-4 text-center cursor-pointer w-full h-full flex items-center justify-center ${
              cell.marked && !cell.free ? "line-through text-gray-500" : ""
            } ${
              cellClass
                ? cellClass(cell)
                : cell.free
                ? "bg-[#63f0d2] font-bold"
                : "bg-[#63f0d2]"
            }`}
            onClick={() => toggleCell(rowIndex, colIndex)}
            style={{ fontSize: "clamp(0.6rem, 2vw, 1.2rem)" }}
          >
            {cell.text}
          </div>
        ))
      )}
    </div>
  );
};

export default BingoCard;
