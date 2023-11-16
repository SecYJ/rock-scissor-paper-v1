import { useEffect, useState } from "react"

const useHouseSelect = (callback, seconds) => {
    const [houseTurn, setHouseTurn] = useState(null)

    const updateTurn = (turn) => setHouseTurn(turn)

    useEffect(() => {
        if (!houseTurn) return;

        let timer;

        timer = setTimeout(() => {
            callback()
        }, [seconds * 1000])

        return () => clearTimeout(timer)
    }, [houseTurn, callback, seconds])

    return { updateTurn }
}

export default useHouseSelect;