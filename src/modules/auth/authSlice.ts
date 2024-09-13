import { createSlice } from '@reduxjs/toolkit';

interface AuthUser {
	userId: string | null;
	name: string | null;
	email: string | null;
}

interface AuthState {
	user: AuthUser | null;
}

const initialState: AuthState = {
	user: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		addUser: (state, action) => {
			state.user = action.payload;
		},
		removeUser: (state) => {
			state.user = null;
		},
	},
});

export const { addUser, removeUser } = authSlice.actions;

export default authSlice;
