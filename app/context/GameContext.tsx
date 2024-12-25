import { createContext, ReactNode } from "react";
import { Cell } from "../utils/gameUtils";

interface GameContextProps {
    board: Cell[][];
    toggleCell: (rowIndex: number, colIndex: number) => void;
  }
  
export const GameContext = createContext<GameContextProps | undefined>(undefined);

export const GameContextProvider: React.FC<{
  children: ReactNode;
  value: GameContextProps;
}> = ({ children, value }) => {
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
