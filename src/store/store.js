import { configureStore } from '@reduxjs/toolkit';
import blogsReducer from './slices/blogsSlice';
import userReducer from './slices/userSlice';

const store = configureStore({
	reducer: {
		blogs: blogsReducer,
		user: userReducer,
	},
});

const blogsSelector = state => state.blogs.blogs;
const userSelector = state => state.user.user;

export { blogsSelector, userSelector };
export default store;
