import {
    clPaper as paper, 
    clScissor as scissor,
    clRock as rock,
    clLizard as lizard,
    clSpock as spock
} from "../../assets";
import { useGame } from "../contexts/GameContext";

const SELECTION_IMAGE_CLASS = "w-[95px] h-[97px] lg:w-[145px] lg:h-[148px]";

const Idle = () => {
    const { startGame } = useGame()

	return (
        <div className="flex flex-col justify-center">
            {/* first row */}
            <div className="text-center">
               <button type="button" className="" onClick={() => startGame({ name: "scissor", icon: scissor})}>
                 <img src={scissor} className={SELECTION_IMAGE_CLASS} alt="scissor" />
               </button>
            </div>
            
            {/* second row */}
            <div className="flex gap-[120px] mb-[26px] lg:gap-[182px]">
                <button type="button" onClick={() => startGame({ name: "spock", icon: spock})}>
                    <img src={spock} className={SELECTION_IMAGE_CLASS} alt="spock" />
                </button>
               <button type="button" onClick={() => startGame({ name: "paper", icon: paper})}>
                 <img src={paper} className={SELECTION_IMAGE_CLASS} alt="paper" />
               </button>
            </div>
            
            {/* third row */}
            <div className="flex justify-evenly">
                <button type="button" onClick={() => startGame({ name: "lizard", icon: lizard })}>
                    <img src={lizard} className={SELECTION_IMAGE_CLASS} alt="lizard" />
                </button>
                
                <button type="button" onClick={() => startGame({ name: "rock", icon: rock })}>
                    <img src={rock} className={SELECTION_IMAGE_CLASS} alt="rock" />
                </button>
            </div>
        </div>
	);
};

export default Idle;
