const Header = ({ score }) => {
	return (
		<div className="flex justify-between border border-[#565468] p-3 items-center max-w-[700px] w-full">
			<h1 className="text-[21px] font-bold leading-[1rem]">
				ROCK <br />
				PAPER <br />
				SCISSORS
			</h1>
			<div className="bg-white py-2.5 px-6">
				<div className="text-[#2A45C2]">SCORE</div>
				<p className="text-[2.5rem] text-center text-[#565468] rounded-[.25rem] custom-shadow leading-none">
					{score}
				</p>
			</div>
		</div>
	);
};

export default Header;
