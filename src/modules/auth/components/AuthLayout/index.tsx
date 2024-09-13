import { useState } from 'react';
import useModal from '../../../../shared/hooks/useModal';
import CharacterModal from '../CharacterModal';
import characters from './characters';
import { AuthCharacter } from '../../models/AuthCharacter';

interface Props {
	children: React.ReactNode;
}

const AuthLayout = ({ children }: Props) => {
	const characterModal = useModal();

	const [selectedCharacter, setSelectedCharacter] = useState<AuthCharacter>();

	const handleOpenModal = (character: AuthCharacter) => {
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
					<div className='relative flex flex-wrap justify-between items-center gap-y-2 bg-black opacity-90 h-[100vh]'>
						{characters.map((character) => (
							<div
								onClick={() => handleOpenModal(character)}
								className='w-[220px] h-[200px] hover:opacity-80'
								key={character.id}
							>
								<img
									src={character.image}
									className='w-full h-full object-cover hover:scale-90 cursor-pointer transition-all'
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
