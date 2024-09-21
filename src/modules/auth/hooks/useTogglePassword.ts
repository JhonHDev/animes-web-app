import { useState } from 'react';

const useTogglePassword = () => {
	const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	return {
		showPassword,
		togglePasswordVisibility,
	};
};

export default useTogglePassword;
