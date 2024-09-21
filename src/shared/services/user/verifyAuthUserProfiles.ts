import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../config/firebase';

const verifyAuthUserProfiles = async (userId: string): Promise<boolean> => {
	try {
		// Busca el documento del usuario en Firestore (ajusta según tu estructura)
		const docRef = doc(db, 'profiles-by-user', userId);
		const docSnap = await getDoc(docRef);

		// Verifica si el documento existe
		if (docSnap.exists()) {
			const data = docSnap.data();
			// Asegúrate de que tiene el campo 'profiles' con datos
			return data?.profiles?.length > 0;
		} else {
			// Si no existe el documento, retorna false (no hay perfiles)
			return false;
		}
	} catch (error) {
		console.error('Error fetching user profiles:', error);
		return false; // En caso de error, retorna false
	}
};

export default verifyAuthUserProfiles;
