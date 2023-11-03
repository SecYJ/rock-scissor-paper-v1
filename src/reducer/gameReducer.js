const gameReducer = (state, action) => {
    const payload = action.payload;

    switch (action.type) {
        case "startGame":
            return { ...state, status: "playing", playerSelect: payload }

        case "toggleModal":
            return { ...state, modalVisible: payload }

        case "playAgain": 
            return { ...state, status: "idle", playerSelect: null, houseSelect: null, winner: null };

        case "housePick":
            return { ...state, houseSelect: payload }

        case "checkWinner":
            const { playerSelect, houseSelect, score } = state;

            if (playerSelect.name === houseSelect.name) {
                return { ...state, winner: "draw" }
            }

            // player = 0, house = 1
            const playerWinningRules = [
                ["scissor", "paper"],
                ["paper", "rock"],
                ["rock", "lizard"],
                ["lizard", "spock"],
                ["spock", "scissor"],
                ["paper", "spock"],
                ["scissor", "lizard"],
                ["spock", "rock"],
                ["lizard", "paper"],
                ["rock", "scissor"]
            ]

            const isPlayerWin = playerWinningRules.some((rule) => {
                return playerSelect.name === rule[0] && houseSelect.name === rule[1]
            })

            return { ...state, winner: isPlayerWin ? "player" : "house", score: isPlayerWin ? score + 1 : score - 1 <= 0 ? 0 : score - 1 }

        default:
            throw new Error(`${action.type} is not defined in gameReducer`)
    }

}

export default gameReducer;