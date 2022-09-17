import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
	name: 'user',
	initialState: {
		user: null,
	},
	reducers: {
		login: (state, { payload }) => {
			state.user = {
				...payload,
				logged: true,
			};
		},
		logout: state => {
			state.user = {
				logged: false,
			};
		},
	},
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
