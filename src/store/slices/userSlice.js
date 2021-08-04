import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
	name: 'user',
	initialState: {
		user: null,
	},
	reducers: {
		login: state => {
			return 0;
		},
	},
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
