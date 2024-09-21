import { Link } from 'react-router-dom';
import AuthLayout from '../../components/AuthLayout';

const ForgotPassword = () => {
	return (
		<AuthLayout>
			<form className='w-full h-full flex flex-col justify-center items-center gap-5 px-4 animate__animated animate__fadeIn '>
				<div className='text-center mb-4'>
					<section className='flex flex-col justify-center items-center gap-4'>
						<h1 className='text-2xl'>¿Olvidaste tu contraseña?</h1>
						<p className='text-gray-60 max-w-md text-center'>
							Ingresa tu correo y será enviado un enlace a su bandeja para que cambie la contraseña.
						</p>
					</section>
				</div>

				<input
					type='email'
					placeholder='Correo'
					className='w-full max-w-[360px] bg-white border py-3 px-6 rounded-md z-10'
				/>

				<button
					className='py-3 w-full max-w-[360px] rounded-md border bg-[#152c66] hover:bg-[#152c66e4] text-white'
					type='submit'
				>
					Recuperar cuenta
				</button>

				<Link to='/auth/login' className='underline text-cobalt hover:text-cobalt/80 text-center py-2'>
					Regresar
				</Link>
			</form>
		</AuthLayout>
	);
};

export default ForgotPassword;
