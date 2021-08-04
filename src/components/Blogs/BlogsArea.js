import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { db } from '../../firebase';
import { blogsSelector } from '../../store/store.js';
import { setBlogs } from '../../store/slices/blogsSlice';
import uuid from 'react-uuid';
import BlogsEl from './BlogsArea.style.js';
import Blog from './Blog';

const BlogsArea = () => {
	const dispatch = useDispatch();
	const blogs = useSelector(blogsSelector);

	useEffect(() => {
		db.collection('blogs').onSnapshot(snapshot => {
			const blogsArray = snapshot.docs.map(doc => ({
				id: doc.id,
				...doc.data(),
			}));
			dispatch(setBlogs(blogsArray));
		});

		//eslint-disable-next-line
	}, []);

	return (
		<main>
			<BlogsEl className='blogs-container container'>
				{!blogs.length && (
					<p className='no-results'>
						Currently, there are no posts to be displayed.
					</p>
				)}

				{blogs.map(blog => {
					return <Blog key={uuid()} {...blog}></Blog>;
				})}
			</BlogsEl>
		</main>
	);
};

export default BlogsArea;
