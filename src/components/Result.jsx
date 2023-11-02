import Button from "./Button";

const result = {
	player: "WIN",
	house: "LOSE",
	draw: "DRAW",
};

const Result = ({ restart, winner }) => {
	return (
		<div className="mt-[62px] text-center">
			<h2 className="text-[3.5rem] mb-4 font-bold">YOU {result[winner]}</h2>
			<Button onClick={restart}>PLAY AGAIN</Button>
		</div>
	);
};

export default Result;
