import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { db, auth } from './firebase';
import { setBlogs } from './store/slices/blogsSlice';
import { login, logout } from './store/slices/userSlice';

import './App.css';

import LoggedRoute from './router/LoggedRoute';
import Header from './components/Header/Header';
import BlogsArea from './components/Blogs/BlogsArea/BlogsArea';
import AddBlog from './components/Blogs/AddBlog/AddBlog';
import SingleBlog from './components/Blogs/SingleBlog/SingleBlog';
import LoginPage from './components/User/LoginPage';
import RegisterPage from './components/User/RegisterPage';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		db.collection('blogs')
			.orderBy('timestamp', 'asc')
			.onSnapshot(snapshot => {
				const blogsArray = snapshot.docs.map(doc => ({
					id: doc.id,
					...doc.data(),
					timestamp: null,
				}));
				dispatch(setBlogs(blogsArray));
			});
	}, [dispatch]);

	useEffect(() => {
		auth.onAuthStateChanged(userAuth => {
			if (!userAuth) {
				dispatch(logout());
				return;
			}

			dispatch(
				login({
					email: userAuth.email,
					password: userAuth.password,
					username: userAuth.displayName,
					profilePic: userAuth.photoURL,
					uid: userAuth.uid,
				})
			);
		});
	}, [dispatch]);

	return (
		<div className='App'>
			<Router>
				<Header />
				<Routes>
					<Route path='/' exact element={<BlogsArea />} />
					<Route
						path='/addBlog'
						element={<LoggedRoute component={<AddBlog />} />}
					/>
					<Route path='/blog/:id' exact element={<SingleBlog />} />
					<Route path='/login' element={<LoginPage />} />
					<Route path='/register' element={<RegisterPage />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
