import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from '../config/redux/store';

import AuthOutlet from '../modules/auth/components/AuthOutlet';

const PublicRoute = () => {
	const { user } = useSelector((state: RootState) => state.auth);

	return user ? <Navigate to='/manage-profile' /> : <AuthOutlet />;
};

export default PublicRoute;
