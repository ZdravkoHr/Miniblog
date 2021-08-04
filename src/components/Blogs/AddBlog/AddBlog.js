import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBlog } from '../../../store/slices/blogsSlice';
import { db } from '../../../firebase';

import AddBlogEl from './AddBlog.style';
const AddBlog = () => {
	const dispatch = useDispatch();
	const [title, setTitle] = useState('');
	const [subtitle, setSubtitle] = useState('');
	const [thumbnail, setThumbnail] = useState('');
	const [content, setContent] = useState('');

	const submitHandler = e => {
		e.preventDefault();
		const blog = {
			title,
			subtitle,
			thumbnail,
			content,
			author: 'Zdravko Hristov',
		};

		dispatch(addBlog(blog));
		db.collection('blogs').add(blog);
	};

	return (
		<AddBlogEl>
			<div className='add-blog-container container'>
				<form onSubmit={submitHandler}>
					<div className='form-group title-group'>
						<label htmlFor='title'>Title: </label>
						<input
							type='text'
							name='title'
							id='title'
							required
							value={title}
							onChange={e => setTitle(e.target.value)}
						/>
					</div>
					<div className='form-group subtitle-group'>
						<label htmlFor='subtitle'>Subtitle: </label>
						<input
							type='text'
							name='subtitle'
							id='subtitle'
							required
							value={subtitle}
							onChange={e => setSubtitle(e.target.value)}
						/>
					</div>
					<div className='form-group thumbnail-group'>
						<label htmlFor='thumbnail'>Thumbnail URL: </label>
						<input
							type='text'
							name='thumbnail'
							id='thumbnail'
							required
							value={thumbnail}
							onChange={e => setThumbnail(e.target.value)}
						/>
					</div>
					<div className='form-group content-group'>
						<label htmlFor='content'>Content: </label>
						<textarea
							name='content'
							id='content'
							required
							value={content}
							onChange={e => setContent(e.target.value)}
						></textarea>
					</div>
					<div className='buttons'>
						<button className='btn add-btn'>Add Blog</button>
					</div>
				</form>
			</div>
		</AddBlogEl>
	);
};

export default AddBlog;
