import { useGame } from "../contexts/GameContext";

const Header = () => {
    const { score } = useGame()
    
	return (
		<header className="flex max-w-[700px] justify-between border-[3px] border-white/[.29] p-3 items-center w-full rounded-[5px]">
			<h1 className="text-[21px] font-bold leading-[1rem]">
				ROCK <br />
				PAPER <br />
				SCISSORS <br />
                LIZARD <br />
                SPOCK <br />
			</h1>
			<div className="bg-white py-2.5 px-6 rounded-[.25rem] custom-shadow">
				<div className="text-[#2A45C2]">SCORE</div>
				<p className="text-[2.5rem] text-center text-[#565468] rounded-[.25rem] leading-none">
					{score}
				</p>
			</div>
		</header>
	);
};

export default Header;
