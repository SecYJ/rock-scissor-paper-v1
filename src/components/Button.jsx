const Button = ({ onClick, children }) => {
	return (
		<button
			type="button"
			className="py-2.5 px-9 border border-white rounded-lg hover:bg-white transition-colors hover:text-[#3B4262] lg:justify-self-end"
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
