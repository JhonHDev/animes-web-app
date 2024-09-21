import { useState } from 'react';

import characters from './characters';

import useClickCount from '../../hooks/useClickCount';
import useModal from '../../../../shared/hooks/useModal';

import CharacterModal from '../CharacterModal';

import { AuthCharacter } from '../../models/AuthCharacter';
import { showInfoAlert } from '../../../../shared/helpers/alerts';

interface Props {
	children: React.ReactNode;
}

const AuthLayout = ({ children }: Props) => {
	const characterModal = useModal();

	const [selectedCharacter, setSelectedCharacter] = useState<AuthCharacter>();

	const { clickCount, maxClickInAuth, handleSetClickCount } = useClickCount();

	const handleOpenModal = (character: AuthCharacter) => {
		if (clickCount >= maxClickInAuth) {
			showInfoAlert('Debes Iniciar sesión para disfrutar de esta característica.');
			return;
		}

		handleSetClickCount();
		characterModal.openModal();
		setSelectedCharacter(character);
	};

	const handleCloseModal = () => {
		characterModal.closeModal();
		setSelectedCharacter(undefined);
	};

	return (
		<>
			<section className='grid lg:grid-cols-2 '>
				<div className='hidden w-full h-[100vh] lg:block overflow-hidden'>
					<div className='relative flex flex-wrap justify-evenly items-center gap-y-2  opacity-90 h-[100vh] overflow-hidden'>
						<div className='absolute w-full h-full bg-red-400'>
							<img src='/images/auth-bg/color-bg.jpg' alt='' className='w-full h-[100vh]' />
						</div>

						{characters.map((character) => (
							<div
								onClick={() => handleOpenModal(character)}
								className='w-[220px] h-[200px] '
								key={character.id}
							>
								<img
									src={character.image}
									className='w-full h-full object-cover object-top hover:scale-90 cursor-pointer transition-all down-img-shadow  xl:hover:opacity-80 z-20'
									title='Abrir modal del personaje'
								/>
							</div>
						))}
					</div>
				</div>

				<div className='w-full h-[100vh] bg-gray-[#ccc]'>{children}</div>
			</section>

			{characterModal.isModalOpen && selectedCharacter && (
				<CharacterModal
					isModalOpen={characterModal.isModalOpen}
					openModal={characterModal.openModal}
					closeModal={characterModal.closeModal}
					selectedCharacter={selectedCharacter}
					handleCloseModal={handleCloseModal}
				/>
			)}
		</>
	);
};

export default AuthLayout;
