import { useForm } from 'react-hook-form';

import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';

import AuthLayout from '../../components/AuthLayout';
import AuthOptions from '../../components/AuthOptions';
import useTogglePassword from '../../hooks/useTogglePassword';
import { useState } from 'react';
import { createNewAccount } from '../../services';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../../authSlice';
import { showErrorAlert } from '../../../../shared/helpers/alerts';
import AuthLoader from '../../components/AuthLoader';

type FormFiels = {
	email: string;
	password: string;
};

const Register = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { showPassword, togglePasswordVisibility } = useTogglePassword();

	const {
		register,
		handleSubmit,
		getValues,
		formState: { errors },
		reset,
	} = useForm<FormFiels>();

	const [isLoading, setIsLoading] = useState(false);

	const onSubmit = async () => {
		const { email, password } = getValues();
		setIsLoading(true);

		try {
			const user = await createNewAccount({ email, password });

			dispatch(
				addUser({
					userId: user.uid,
					name: user.displayName,
					email: user.email,
				})
			);

			reset();
			navigate('/manage-profile');
		} catch (error) {
			console.log(error);
			showErrorAlert('Credenciales de registro no válidas');
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<AuthLayout>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='w-full h-full flex flex-col justify-center items-center gap-5 px-4 animate__animated animate__fadeIn'
			>
				<div className='text-center mb-4'>
					<h1 className='text-3xl'>Registrarse</h1>
				</div>

				<input
					type='email'
					placeholder='Correo'
					className={`w-full max-w-[360px] bg-white border py-3 px-6 rounded-md z-10 ${
						errors.email ? 'border-red-500' : 'border-gray-600'
					}`}
					{...register('email', {
						required: {
							value: true,
							message: 'El correo electrónico es requerido',
						},
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
							message: 'Correo electrónico no válido',
						},
					})}
				/>

				{errors.email && <span className='text-red-500 -mt-2'>{errors.email.message}</span>}

				<div className='relative w-full max-w-[360px]'>
					<input
						type={showPassword ? 'text' : 'password'}
						placeholder='Contraseña'
						className={`w-full bg-white border py-3 px-6 rounded-md z-10 pr-12 ${
							errors.password ? 'border-red-500' : 'border-gray-600'
						}`}
						{...register('password', {
							required: {
								value: true,
								message: 'Contraseña es requerida',
							},
							minLength: {
								value: 6,
								message: 'Contraseña mínimo de 6 caracteres',
							},
						})}
					/>
					<button
						type='button'
						className='absolute right-3 top-2/4 transform -translate-y-1/2 text-gray-500'
						onClick={togglePasswordVisibility}
					>
						{showPassword ? <FaEye /> : <FaEyeSlash />}
					</button>
				</div>

				{errors.password && <span className='text-red-500 -mt-2'>{errors.password.message}</span>}

				<button
					disabled={isLoading}
					className={`py-3 w-full max-w-[360px] rounded-md border  hover:bg-[#152c66e4] text-white flex justify-center items-center  ${
						isLoading ? 'bg-[#152c669e]' : 'bg-[#152c66]'
					}`}
					type='submit'
				>
					{isLoading && <AuthLoader />}
					{!isLoading && <span>Crear cuenta</span>}
				</button>

				<AuthOptions />
			</form>
		</AuthLayout>
	);
};

export default Register;
