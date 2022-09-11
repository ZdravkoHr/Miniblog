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

		editBlog: (state, { payload }) => {
			state.blogs = state.blogs.map(currentBlog => {
				return payload.id === currentBlog.id ? payload : currentBlog;
			});
		},

		setFilter: (state, { payload }) => {
			state.filter = payload;
		},
	},
});

export const { setBlogs, addBlog, editBlog, setFilter } = blogsSlice.actions;

export default blogsSlice.reducer;
