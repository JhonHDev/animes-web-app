import { createBrowserRouter } from 'react-router-dom';

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

import Login from '../modules/auth/pages/Login';
import Register from '../modules/auth/pages/Register';
import ForgotPassword from '../modules/auth/pages/ForgotPassword';

import PageNotFound from '../shared/pages/PageNotFound';

import ManageProfile from '../modules/profile/pages/ManageProfile';
import Home from '../modules/animes/pages/Home';

const router = createBrowserRouter([
	{
		path: '/auth/',
		element: <PublicRoute />,
		children: [
			{
				index: true,
				element: <Login />,
			},
			{
				path: 'login',
				element: <Login />,
			},
			{
				path: 'register',
				element: <Register />,
			},
			{
				path: 'forgot-password',
				element: <ForgotPassword />,
			},
		],
	},
	{
		path: '/',
		element: <PrivateRoute />,
		children: [
			{
				path: 'manage-profile',
				element: <ManageProfile />,
			},
			{
				path: 'home',
				element: <Home />,
			},
		],
	},
	{
		path: '*',
		element: <PageNotFound />,
	},
]);

export default router;
