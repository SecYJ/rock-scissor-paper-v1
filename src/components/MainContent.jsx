import { useGame } from "../contexts/GameContext";
import Button from "./Button";
import Idle from "./Idle";
import Playing from "./Playing";

const MainContent = () => {
    const { status, toggleModal } = useGame()

    return  (
        <>
            {status === "idle" && <Idle />}
            {status === "playing" && <Playing />}
            <Button onClick={() => toggleModal(true)}>RULES</Button>
        </>
    )
} 

 export default MainContent;