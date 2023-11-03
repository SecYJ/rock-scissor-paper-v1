import clsx from "clsx";
import { beatsPicture, bottomLeftArrow, bottomRightArrow, close, leftArrow, lizard, paper, rock, scissor, spock, topLeftArrow, topRightArrow } from "../../../assets";
import { useGame } from "../../contexts/GameContext";
import useDesktop from "../../hooks/useDesktop";
import BeatText from "./BeatText";

const ModalOverLay = ({ children, }) => {
    const { toggleModal } = useGame()

	return (
		<div
			onClick={(e) => {
				if (e.target.dataset.overlay) toggleModal(false)
			}}
			className="fixed inset-0 bg-black/50 z-1 grid place-items-center"
			data-overlay
		>
			{children}
		</div>
	);
};

const SELECTION_IMAGE_CLASS = "w-[95px] h-[97px] lg:w-[103px] lg:h-[105px]";

const Modal = () => {
    const { modalVisible, toggleModal } = useGame()
	const isDesktop = useDesktop();
    
    if (!modalVisible) return null;

	return (
        <ModalOverLay>
            <div className={clsx("bg-white fixed p-8 mx-auto rounded-lg", !isDesktop && "inset-0 grid place-content-center")}>
                <div className="flex justify-center lg:justify-between text-center lg:mb-12">
                    <h2 className="text-[2rem] leading-none text-[#3B4262] font-bold lg:mr-0 lg:mb-0 mb-[113px]">
                        RULES
                    </h2>
                    <button type="button" className="hidden lg:block" onClick={() => toggleModal(false)}>
                        <img src={close} alt="close button" />
                    </button>
                </div>

                <div className="relative">
                    <div className="grid grid-cols-3 gap-3 translate-y-2">
                        <div className="flex justify-end items-center">
                            <BeatText className="translate-x-3 translate-y-1" />
                            <img src={topRightArrow} className="translate-y-6" alt="top right arrow" />
                        </div>
                        <img src={scissor} className={SELECTION_IMAGE_CLASS} alt="scissor" />
                        <div className="flex items-center">
                            <img src={bottomRightArrow} className="translate-y-6" alt="bottom right arrow" />
                            <BeatText className="-translate-x-3 translate-y-1" />
                        </div>
                    </div>
                    
                    {/* second row */}
                    <div className="flex justify-between">
                        <img src={spock} className={SELECTION_IMAGE_CLASS} alt="spock" />
                        <img src={paper} className={SELECTION_IMAGE_CLASS} alt="paper" />
                    </div>
                    
                    {/* third row arrow */}
                    <div className="flex justify-between translate-y-1">
                        <div className="flex items-center">
                            <BeatText className="translate-x-1" />
                            <img src={topLeftArrow} alt="top left arrow" />
                        </div>
                        <div className="flex items-center">
                            <img src={bottomLeftArrow} alt="bottom left arrow" />
                            <BeatText />
                        </div>
                    </div>
                    
                    {/* third row */}
                    <div className="flex justify-center">
                        <img src={lizard} className={SELECTION_IMAGE_CLASS} alt="lizard" />
                        <div className="self-end">
                            <img src={leftArrow} alt="left arrow" />
                            <BeatText />
                        </div>
                        <img src={rock} className={SELECTION_IMAGE_CLASS} alt="rock" />
                    </div>

                    <img src={beatsPicture} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[30%]" alt="beats picture" />
                </div>
                
                <button type="button" className="lg:hidden mt-[154px] mx-auto" onClick={() => toggleModal(false)}>
                    <img src={close} alt="close button" />
                </button>
            </div>
        </ModalOverLay>
	);
};

export default Modal;
