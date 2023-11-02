import { useEffect, useState } from "react";

export function useMediaQuery(element) {
	const [media, setMedia] = useState(0);

	useEffect(() => {
		const observer = new ResizeObserver((entries) => {
			setMedia(entries[0].target.clientWidth);
		});

		observer.observe(element);

		return () => observer.disconnect();
	}, [media, element]);

	return media;
}
