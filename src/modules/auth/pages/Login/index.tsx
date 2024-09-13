import { useState } from 'react';

import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';
import AuthLayout from '../../components/AuthLayout';

const Login = () => {
	const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	return (
		<AuthLayout>
			<form className='w-full h-full flex flex-col justify-center items-center gap-5 px-4 animate__animated animate__fadeIn'>
				<div className='text-center mb-4'>
					<h1 className='text-3xl'>Iniciar Sesión</h1>
				</div>

				<input
					type='email'
					placeholder='Correo'
					className='w-full max-w-[360px] bg-white border py-3 px-6 rounded-md z-10'
				/>

				<div className='relative w-full max-w-[360px]'>
					<input
						type={showPassword ? 'text' : 'password'}
						placeholder='Contraseña'
						className='w-full bg-white border py-3 px-6 rounded-md z-10 pr-12'
					/>
					<button
						type='button'
						className='absolute right-3 top-2/4 transform -translate-y-1/2 text-gray-500'
						onClick={togglePasswordVisibility}
					>
						{showPassword ? <FaEye /> : <FaEyeSlash />}
					</button>
				</div>

				<button
					className='py-3 w-full max-w-[360px] rounded-md border bg-blue-500 hover:bg-blue-400 text-white'
					type='submit'
				>
					Ingresar
				</button>
			</form>
		</AuthLayout>
	);
};

export default Login;
