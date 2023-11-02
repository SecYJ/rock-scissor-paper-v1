import paper from "../../assets/cl-paper.svg";
import scissor from "../../assets/cl-scissor.svg";
import rock from "../../assets/cl-rock.svg";

const imageClass = "lg:w-[198px] lg:h-[203px] w-[130px] h-[133px]";

const Idle = ({ startGame }) => {
	return (
		<div className="relative overflow-hidden">
			<div className="flex gap-x-[50px] lg:gap-x-20 mb-4 lg:mb-6">
				<div onClick={() => startGame("paper")}>
					<img src={paper} className={imageClass} alt="paper" />
				</div>
				<div className="col-start-3 " onClick={() => startGame("scissor")}>
					<img src={scissor} alt="scissor" className={imageClass} />
				</div>
			</div>
			<div className="flex justify-center">
				<div onClick={() => startGame("rock")}>
                    <img src={rock} alt="rock" className={imageClass} />
                </div>
			</div>
			<div className="-z-10 absolute top-[65px] left-2 w-[calc(100%-1rem)] bg-black/20 h-2.5 lg:top-[100px]" />
			<div className="absolute top-1/2 left-0 -translate-x-2 translate-y-1 bg-black/20 h-2.5 rotate-[55deg] -z-10 w-3/4" />

			<div className="absolute top-1/2 right-0 translate-x-2 translate-y-1 bg-black/20 h-2.5 rotate-[125deg] -z-10 w-3/4" />
		</div>
	);
	// 	<div className="grid grid-cols-3 grid-rows-[1fr_auto_1fr] relative">
	// 		<div onClick={() => startGame("paper")}>
	// 			<img src={paper} alt="paper" />
	// 		</div>
	// 		<div className="col-start-3" onClick={() => startGame("scissor")}>
	// 			<img src={scissor} alt="scissor" />
	// 		</div>
	// 		<div className="row-start-3 col-start-2" onClick={() => startGame("rock")}>
	// 			<img src={rock} alt="rock" />
	// 		</div>
	// 		<div className="rectangle" />
	// 	</div>
	// );
};

export default Idle;
