import { useReducer, createContext, useContext, useEffect, useCallback } from "react";
import reducer from "../reducer/gameReducer.js"
import { GAMES_MAP } from "../constants/gamesMap.js";

const GameContext = createContext(null)

const initialStates = {
    modalVisible: false,
    status: "idle",
    playerSelect: null,
    houseSelect: null,
    score: 0,
    winner: null,
}

const GameProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialStates)
    const { houseSelect, status } = state;

    const startGame = useCallback((playerAnswer) => {
        dispatch({ type: "startGame", payload: playerAnswer })
    }, [])

    const toggleModal = useCallback((state) => {
        dispatch({ type: "toggleModal", payload: state })
    }, [])

    const playAgain = useCallback(() => {
        dispatch({ type: "playAgain"})
    }, [])

    useEffect(() => {
        if (status !== "playing" || houseSelect) return;
        let timer;
        
        const selectionListName = Object.keys(GAMES_MAP);
        const randomNumber = Math.floor(Math.random() * selectionListName.length)
        const select = GAMES_MAP[selectionListName[randomNumber]];

        timer = setTimeout(() => {
            dispatch({ type: "housePick", payload: select })
            dispatch({ type: "checkWinner" })
        }, 2000)

        return () => clearTimeout(timer)
    }, [status, houseSelect])

    return (
        <GameContext.Provider value={{ 
                ...state,
                toggleModal,
                startGame,
                playAgain,
            }}>
                {children}
        </GameContext.Provider>
    )
} 

export const useGame = () => {
    const gameContext = useContext(GameContext);
    if (!gameContext) throw new Error("Cannot access")

    return gameContext;
}

 export default GameProvider;