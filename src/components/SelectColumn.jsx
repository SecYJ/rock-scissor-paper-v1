import clsx from "clsx";
import useDesktop from "../hooks/useDesktop";

const SelectColumn = ({ icon, text }) => {
	const isDesktop = useDesktop();

	return (
		<div className={clsx("flex justify-center items-center", isDesktop ? "flex-col-reverse gap-[63px]" : "flex-col gap-4")}>
			<img src={icon} className="lg:w-[292px] lg:h-[292px] w-[130px] h-[130px]" alt="icon" />
			<p className="text-[15px] lg:text-[24px] leading-8">{text}</p>
		</div>
	);
};

export default SelectColumn;
