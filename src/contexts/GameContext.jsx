import { createContext } from "react";

const GameContext = createContext(null)

const GameProvider = ({ children }) => {
  return <GameContext.Providver>
    {children}
  </GameContext.Providver> 
} 

 export default GameProvider;