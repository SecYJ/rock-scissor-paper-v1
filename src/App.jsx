import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import useDesktop from "./hooks/useDesktop";
import { Playing, Result, Button, Idle, Modal, Header } from "./components";
import { clPaper as paper, clScissor as scissor, clRock as rock } from "../assets";

const gamesMap = {
	rock: {
		name: "rock",
		icon: rock,
	},
	scissor: {
		name: "scissor",
		icon: scissor,
	},
	paper: {
		name: "paper",
		icon: paper,
	},
};

const App = () => {
	const [modalVisible, setModalVisible] = useState(false);
	const [status, setStatus] = useState("idle");
	const [playerSelect, setPlayerSelect] = useState(null);
	const [houseSelect, setHouseSelect] = useState(null);
	const [score, setScore] = useState(0);
	const [winner, setWinner] = useState(null);
	const isDesktop = useDesktop();

	const startGame = (selectedAnswer) => {
		setStatus("playing");
		setPlayerSelect(gamesMap[selectedAnswer]);
	};

	const playAgain = () => {
		setWinner(null);
		setHouseSelect(null);
		setPlayerSelect(null);
		setStatus("idle");
	};

	// HOUSE random pick
	useEffect(() => {
		if (!playerSelect || houseSelect) return;
		let timer;

		timer = setTimeout(() => {
			const selectionList = Object.keys(gamesMap);
			const randomNumber = Math.floor(Math.random() * selectionList.length);
			const select = selectionList[randomNumber];
			setHouseSelect(gamesMap[select]);
		}, 2000);

		return () => clearTimeout(timer);
	}, [houseSelect, playerSelect]);

	// decide winner
	useEffect(() => {
		if (winner || !playerSelect || !houseSelect) return;

		if (playerSelect.name === houseSelect.name) {
			console.log("same");
			setWinner("draw");
			return;
		}

		// player win
		if (playerSelect.name === "rock" && houseSelect.name === "scissor") {
			setWinner("player");
			setScore((score) => score + 1);
			return;
		}

		if (playerSelect.name === "paper" && houseSelect.name === "rock") {
			setWinner("player");
			setScore((score) => score + 1);
			return;
		}

		if (playerSelect.name === "scissor" && houseSelect.name === "paper") {
			setWinner("player");
			setScore((score) => score + 1);
			return;
		}

		setWinner("house");
		setScore((score) => (score - 1 < 0 ? 0 : score - 1));
	}, [status, playerSelect, houseSelect, winner]);

	return (
		<div className="container">
			{/* top */}
			<div className="min-h-screen grid grid-rows-[auto_1fr_auto] justify-items-center pt-8 lg:pt-12 pb-14 lg:pb-8">
				<Header score={score} />
				{/* main */}
				<main className="grid place-content-center">
					{status === "idle" && <Idle startGame={startGame} />}

					{status === "playing" && (
						<Playing
							playerSelect={playerSelect}
							houseSelect={houseSelect}
							restart={playAgain}
							winner={winner}
						/>
					)}

					{winner && !isDesktop && <Result restart={playAgain} winner={winner} />}
				</main>

				<Button onClick={() => setModalVisible((m) => !m)}>RULES</Button>
			</div>

			{/* MODAL */}
			{modalVisible && createPortal(<Modal onClose={() => setModalVisible(false)} />, document.body)}
		</div>
	);
};

export default App;
