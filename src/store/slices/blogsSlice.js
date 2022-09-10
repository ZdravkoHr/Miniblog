import { createSlice } from '@reduxjs/toolkit';

const blogsSlice = createSlice({
	name: 'blogs',
	initialState: {
		blogs: [],
		filter: '',
	},
	reducers: {
		setBlogs: (state, { payload }) => {
			state.blogs = payload;
		},

		addBlog: (state, { payload }) => {
			state.blogs.push(payload);
		},

		setFilter: (state, { payload }) => {
			state.filter = payload;
		},
	},
});

export const { setBlogs, addBlog, setFilter } = blogsSlice.actions;

export default blogsSlice.reducer;
