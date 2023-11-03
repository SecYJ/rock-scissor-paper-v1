import clsx from "clsx";
import { useGame } from "../contexts/GameContext";
import useDesktop from "../hooks/useDesktop";
import Result from "./Result";
import SelectColumn from "./SelectColumn";

const HOUSE_PICKED = "THE HOUSE PICKED";

const Playing = () => {
	const isDesktop = useDesktop();
    const { playerSelect, houseSelect, winner } = useGame()

	return (
		<>
            <div className="grid grid-cols-2 w-full lg:grid-cols-[1fr_auto_1fr] align-items-center">

                {playerSelect && <SelectColumn icon={playerSelect.icon} text="YOU PICKED" />}

                {/* desktop result */}
                {winner && isDesktop && <div className="self-center">
                    <Result />
                </div>}

                {!winner && isDesktop && <div className="w-[266px]" />}

                {houseSelect ? (
                    <SelectColumn icon={houseSelect.icon} text={HOUSE_PICKED} />
                ) : (
                    <div className={clsx("flex items-center justify-center", isDesktop ? "flex-col-reverse" : "flex-col")}>
                        <div className="w-[110px] lg:translate-y-9 h-[110px] lg:w-[224px] lg:h-[224px] rounded-full bg-black/10 mb-6 lg:mb-0" />{" "}
                        <p className="mt-3 text-[15px] lg:text-[24px] leading-8 lg:mt-0 lg:-translate-y-[66px]">{HOUSE_PICKED}</p>
                    </div>
                )}

                {/* mobile result */}
                {winner && !isDesktop && <div className="col-span-full">
                    <Result />
                </div>}
                        
            </div>
        </>
	);
};

export default Playing;
