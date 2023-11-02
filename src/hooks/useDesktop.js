import { useEffect, useState } from "react";
import { useMediaQuery } from "./useMediaQuery";

const useDesktop = () => {
	const [isDesktop, setIsDesktop] = useState(false);
	const media = useMediaQuery(document.body);

	useEffect(() => {
		setIsDesktop(media >= 1024);
	}, [media]);

	return isDesktop;
};

export default useDesktop;
