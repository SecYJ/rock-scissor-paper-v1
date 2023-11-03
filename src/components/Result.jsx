import { useGame } from "../contexts/GameContext";
import Button from "./Button";

const result = {
	player: "WIN",
	house: "LOSE",
	draw: "DRAW",
};

const Result = () => {
    const { playAgain, winner } = useGame()

	return (
		<div className="text-center mt-16">
			<h2 className="text-[3.5rem] mb-4 font-bold">YOU {result[winner]}</h2>
			<Button onClick={playAgain}>PLAY AGAIN</Button>
		</div>
	);
};

export default Result;
