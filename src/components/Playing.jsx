import clsx from "clsx";
import useDesktop from "../hooks/useDesktop";
import Result from "./Result";
import SelectColumn from "./SelectColumn";

const HOUSE_PICKED = "THE HOUSE PICKED";

const Playing = ({ playerSelect, houseSelect, restart, winner }) => {
	const isDesktop = useDesktop();

	return (
		<div className="grid grid-cols-2 lg:grid-cols-[1fr_auto_1fr] lg:gap-[55px] place-items-center gap-4">
			{playerSelect && <SelectColumn icon={playerSelect.icon} text="YOU PICKED" />}

			{winner && isDesktop && <Result restart={restart} winner={winner} />}
			{!winner && isDesktop && <div className="w-[266px]" />}

			{houseSelect ? (
				<SelectColumn icon={houseSelect.icon} text={HOUSE_PICKED} />
			) : (
				<div className={clsx("h-full flex items-center", isDesktop ? "flex-col-reverse" : "flex-col")}>
					<div className="w-[110px] h-[110px] lg:w-[224px] lg:h-[224px] rounded-full bg-black/10 lg:mb-8 mt-2.5 lg:mt-0" />{" "}
					<p className="mt-auto lg:mb-auto lg:mt-0">{HOUSE_PICKED}</p>
				</div>
			)}
		</div>
	);
};

export default Playing;
