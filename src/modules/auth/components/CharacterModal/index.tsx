import { RiCloseLargeFill } from 'react-icons/ri';

import { AuthCharacter } from '../../models/AuthCharacter';

import CharacterModalContent from './CharacterModalContent';

interface Props {
	isModalOpen: boolean;
	openModal: () => void;
	closeModal: () => void;
	selectedCharacter: AuthCharacter;
	handleCloseModal: () => void;
}

const CharacterModal = ({ isModalOpen, selectedCharacter, handleCloseModal }: Props) => {
	return (
		<div
			className={`fixed z-50 inset-0 flex items-center justify-center transition-opacity duration-600 ease-linear ${
				isModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
			}`}
		>
			{/* Fondo oscuro */}
			<div
				className={`fixed inset-0 bg-black bg-opacity-70 ${isModalOpen ? 'opacity-100' : 'opacity-0'}`}
				onClick={handleCloseModal}
			></div>

			{/* Contenido del modal */}
			<div
				className={`bg-white p-6 rounded-lg shadow-lg z-10 w-11/12 max-w-xl md:w-3/4 lg:w-3/4 transition-transform duration-300 ease-linear animate__animated animate__backInDown ${
					isModalOpen ? 'scale-100' : 'scale-95'
				}`}
			>
				{/* Botón de cierre */}
				<button
					onClick={handleCloseModal}
					type='button'
					className='text-gray-500 hover:text-gray-700 float-right'
				>
					<RiCloseLargeFill />
				</button>

				{/* Contenido del modal */}
				<div className='mt-4 min-h-[30vh]'>
					<CharacterModalContent selectedCharacter={selectedCharacter} handleCloseModal={handleCloseModal} />
				</div>
			</div>
		</div>
	);
};

export default CharacterModal;
