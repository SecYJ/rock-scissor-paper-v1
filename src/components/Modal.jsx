import clsx from "clsx";
import { close, downArrow, leftArrow, paper, rock, scissor, upArrow } from "../../assets";
import useDesktop from "../hooks/useDesktop";

const ModalOverLay = ({ children, onClose }) => {
	return (
		<div
			onClick={(e) => {
				if (e.target.dataset.overlay) onClose();
			}}
			className="fixed inset-0 bg-black/50 z-1 grid place-items-center"
			data-overlay
		>
			{children}
		</div>
	);
};

const Modal = ({ onClose }) => {
	const isDesktop = useDesktop();

	return (
		<ModalOverLay onClose={onClose}>
			<div className={clsx("bg-white fixed p-8 mx-auto", isDesktop ? "" : "inset-0 grid place-content-center")}>
				<div className="flex lg:mb-12">
					<h2 className="text-[2rem] leading-none text-[#3B4262] font-bold lg:mr-0 lg:ml-auto lg:mb-0 mx-auto mb-[113px]">
						RULES
					</h2>
					<button type="button" className="hidden lg:block ml-auto" onClick={onClose}>
						<img src={close} alt="close button" />
					</button>
				</div>
				<div className="grid grid-cols-3 grid-rows-[1fr_auto_1fr]">
					<div>
						<img src={paper} alt="paper logo" />
					</div>
					<div className="col-start-3">
						<img src={scissor} alt="scissor logo" />
					</div>
					<div className="row-start-3 col-start-2">
						<img src={rock} alt="" />
					</div>

					<div className="row-start-2 flex justify-end items-center">
						<p className="font-bold text-[13px] text-[#B1B4C5]">BEATS</p>
						<img src={downArrow} alt="down arrow" />
					</div>
					<div className="row-start-2 flex col-start-3 items-center text-[#B1B4C5]">
						<img src={upArrow} alt="up arrow" />
						<p className="font-bold text-[13px] text-[#B1B4C5]">BEATS</p>
					</div>
					<div className="row-start-1 col-start-2 grid place-content-center">
						<p className="font-bold text-[13px] text-[#B1B4C5] mb-2">BEATS</p>
						<img src={leftArrow} alt="" />
					</div>
				</div>

				<button type="button" className="lg:hidden mt-[154px] mx-auto" onClick={onClose}>
					<img src={close} alt="close button" />
				</button>
			</div>
			{/* </> */}
		</ModalOverLay>
	);
};

export default Modal;
