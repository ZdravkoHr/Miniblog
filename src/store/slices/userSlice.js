import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
	name: 'user',
	initialState: {
		user: null,
	},
	reducers: {
		login: (state, { payload }) => {
			state.user = payload;
		},
		logout: (state, { payload }) => {
			state.user = null;
		},
	},
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
