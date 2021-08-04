import { createSlice } from '@reduxjs/toolkit';

const blogsSlice = createSlice({
	name: 'blogs',
	initialState: {
		blogs: [],
	},
	reducers: {
		setBlogs: (state, payload) => {
			state.blogs = payload.payload;
		},

		addBlog: (state, payload) => {
			state.blogs.push(payload);
		},
	},
});

export const { setBlogs, addBlog } = blogsSlice.actions;

export default blogsSlice.reducer;
