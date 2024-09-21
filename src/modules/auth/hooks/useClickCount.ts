import { useState } from 'react';

const getInitialClickCount = () => {
	return Number(localStorage.getItem('ClickCount')) || 0;
};

const useClickCount = () => {
	const [clickCount, setclickCount] = useState(getInitialClickCount);
	const maxClickInAuth = 3;

	const handleSetClickCount = () => {
		setclickCount(clickCount + 1);
		localStorage.setItem('ClickCount', JSON.stringify(clickCount + 1));
	};

	return {
		clickCount,
		maxClickInAuth,
		handleSetClickCount,
	};
};

export default useClickCount;
