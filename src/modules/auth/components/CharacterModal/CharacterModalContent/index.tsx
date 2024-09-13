import { AuthCharacter } from '../../../models/AuthCharacter';

interface Props {
	selectedCharacter: AuthCharacter;
	handleCloseModal: () => void;
}

const CharacterModalContent = ({ selectedCharacter, handleCloseModal }: Props) => {
	return (
		<>
			<div className='flex flex-col justify-center items-center gap-8 py-6'>
				<div>
					<img src={selectedCharacter.image} width={280} className='object-cover' />
				</div>

				<div>
					<p className='break-words text-xl text-center px-4 font-medium'>{selectedCharacter.desc}</p>
				</div>
			</div>

			<audio autoPlay onEnded={() => handleCloseModal()}>
				<source src={selectedCharacter.audioStr} type='audio/mp3' />
			</audio>
		</>
	);
};

export default CharacterModalContent;
