import React, { useEffect } from 'react';

import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { db, auth } from './firebase';
import { setBlogs } from './store/slices/blogsSlice';
import { login, logout } from './store/slices/userSlice';
import { userSelector } from './store/store';

import './App.css';
import Header from './components/Header/Header';
import BlogsArea from './components/Blogs/BlogsArea/BlogsArea';
import AddBlog from './components/Blogs/AddBlog/AddBlog';
import SingleBlog from './components/Blogs/SingleBlog/SingleBlog';
import LoginPage from './components/User/LoginPage';
import RegisterPage from './components/User/RegisterPage';

function App() {
	const dispatch = useDispatch();
	const user = useSelector(userSelector);

	useEffect(() => {
		db.collection('blogs')
			.orderBy('timestamp', 'asc')
			.onSnapshot(snapshot => {
				const blogsArray = snapshot.docs.map(doc => ({
					id: doc.id,
					...doc.data(),
				}));
				dispatch(setBlogs(blogsArray));
			});

		//eslint-disable-next-line
	}, []);

	useEffect(() => {
		auth.onAuthStateChanged(userAuth => {
			if (userAuth) {
				dispatch(
					login({
						email: userAuth.email,
						password: userAuth.password,
						username: userAuth.displayName,
						profilePic: userAuth.photoURL,
						uid: userAuth.uid,
					})
				);

				return;
			}

			dispatch(logout());
		});
	}, []);

	return (
		<div className='App'>
			<Router>
				<Header />
				<Switch>
					<Route path='/' exact>
						<BlogsArea />
					</Route>
					<Route path='/addBlog'>
						{user ? <AddBlog /> : <Redirect to='/login'></Redirect>}
					</Route>
					<Route path='/blog/:id' exact>
						<SingleBlog></SingleBlog>
					</Route>
					<Route path='/login'>
						<LoginPage />
					</Route>
					<Route path='/register'>
						<RegisterPage />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
