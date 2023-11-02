import clsx from "clsx";
import useDesktop from "../hooks/useDesktop";

const SelectColumn = ({ icon, text }) => {
	const isDesktop = useDesktop();

	return (
		<div className={clsx("flex items-center", isDesktop ? "flex-col-reverse gap-[63px]" : "flex-col gap-4")}>
			<>
				<img src={icon} className={clsx("lg:w-[292px] lg:h-[292px] w-[130px] h-[130px]")} alt="icon" />
				<p>{text}</p>
			</>
		</div>
	);
};

export default SelectColumn;
